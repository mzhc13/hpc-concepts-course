let currentTopic = null;
let currentSection = 0;
let currentActivity = 0;


// ========================================
// OPEN / CLOSE
// ========================================

function openActivity(topicId) {

  const topic = window.activitiesData?.[topicId];

  if (!topic) {
    console.error("Activity not found:", topicId);
    return;
  }

  currentTopic = topic;
  currentSection = 0;
  currentActivity = 0;

  const modal = document.getElementById("activity-modal");

  if (!modal) {
    console.error("activity-modal not found");
    return;
  }

  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");

  renderActivity();
}


function closeActivity() {

  const modal = document.getElementById("activity-modal");

  if (!modal) return;

  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}


// ========================================
// CURRENT ACTIVITY
// ========================================

function getCurrentActivity() {

  return currentTopic
    .sections[currentSection]
    .activities[currentActivity];
}


function renderActivity() {

  const title = document.getElementById("activity-title");
  const section = document.getElementById("activity-section");
  const content = document.getElementById("activity-content");

  if (!title || !section || !content) {
    console.error("Activity modal elements not found");
    return;
  }

  const sectionData =
    currentTopic.sections[currentSection];

  const activity = getCurrentActivity();

  title.textContent = currentTopic.title;

  section.innerHTML = `
    <h3>${sectionData.title}</h3>
    <p>
      Question ${currentActivity + 1} of
      ${sectionData.activities.length}
    </p>
  `;

  content.innerHTML = renderQuestion(activity);

  if (activity.type === "drag-order") {
    setupDragAndDrop();
  }
}


// ========================================
// RENDER QUESTIONS
// ========================================

function renderQuestion(activity) {

  // ----------------------------------------
  // MULTIPLE CHOICE
  // ----------------------------------------

  if (activity.type === "multiple-choice") {

    return `
      <div class="activity-question">

        <h3>${activity.question}</h3>

        ${activity.code ? `
          <pre class="activity-code">${activity.code
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")}</pre>
        ` : ""}

        ${activity.question_text ? `
          <h3>${activity.question_text}</h3>
        ` : ""}

        <div class="activity-options">

          ${activity.options.map((option, index) => `
            <label class="activity-option">

              <input
                type="radio"
                name="activity-answer"
                value="${index}"
              >

              <span>${option}</span>

            </label>
          `).join("")}

        </div>

        <button
          class="activity-check"
          onclick="checkMultipleChoice()"
        >
          Check answer
        </button>

        <div id="activity-feedback"></div>

        ${navigationButtons()}

      </div>
    `;
  }


  // ----------------------------------------
  // FILL IN THE BLANK
  // ----------------------------------------

  if (activity.type === "fill-in-the-blank") {

    // Multiple fields
    if (activity.fields) {

      return `
        <div class="activity-question">

          <h3>${activity.question}</h3>

          ${activity.code ? `
            <pre class="activity-code">${activity.code
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")}</pre>
          ` : ""}

          ${activity.question_text ? `
            <h3>${activity.question_text}</h3>
          ` : ""}

          <div class="fill-in-fields">

            ${activity.fields.map((field, index) => `
              <div class="fill-in-field">

                <label for="activity-answer-${index}">
                  ${field.label}
                </label>

                <input
                  type="text"
                  id="activity-answer-${index}"
                  class="activity-text-input"
                  placeholder="Enter value"
                  autocomplete="off"
                >

                <div
                  id="activity-field-feedback-${index}"
                  class="activity-field-feedback"
                ></div>

              </div>
            `).join("")}

          </div>

          <button
            class="activity-check"
            onclick="checkFillInFields()"
          >
            Check answers
          </button>

          <div id="activity-feedback"></div>

          ${navigationButtons()}

        </div>
      `;
    }


    // Single field
    return `
      <div class="activity-question">

        <h3>
          ${activity.question}
          ${activity.words ? `(${activity.words} words)` : ""}
        </h3>

        ${activity.code ? `
          <pre class="activity-code">${activity.code
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")}</pre>
        ` : ""}

        ${activity.question_text ? `
          <h3>${activity.question_text}</h3>
        ` : ""}

        <input
          type="text"
          id="activity-text-answer"
          class="activity-text-input"
          placeholder="Type your answer"
          autocomplete="off"
        >

        <button
          class="activity-check"
          onclick="checkTextAnswer()"
        >
          Check answer
        </button>

        <div id="activity-feedback"></div>

        ${navigationButtons()}

      </div>
    `;
  }


  // ----------------------------------------
  // TRUE / FALSE
  // ----------------------------------------

  if (activity.type === "true-false") {

    return `
      <div class="activity-question">

        <h3>${activity.question}</h3>

        <div class="activity-options">

          <label class="activity-option">
            <input
              type="radio"
              name="activity-answer"
              value="true"
            >
            <span>True</span>
          </label>

          <label class="activity-option">
            <input
              type="radio"
              name="activity-answer"
              value="false"
            >
            <span>False</span>
          </label>

        </div>

        <button
          class="activity-check"
          onclick="checkTrueFalse()"
        >
          Check answer
        </button>

        <div id="activity-feedback"></div>

        ${navigationButtons()}

      </div>
    `;
  }


  // ----------------------------------------
  // DRAG AND DROP
  // ----------------------------------------

  if (activity.type === "drag-order") {

    const items = [...activity.items]
      .sort(() => Math.random() - 0.5);

    return `
      <div class="activity-question">

        <h3>${activity.question}</h3>

        <p>${activity.instruction}</p>

        <div class="drag-items">

          ${items.map(item => `
            <div
              class="drag-item"
              draggable="true"
              data-value="${item}"
            >
              ${item}
            </div>
          `).join("")}

        </div>

        <div class="drop-zone">

          ${activity.answer.map((_, index) => `
            <div
              class="drop-box"
              data-position="${index}"
            ></div>
          `).join("")}

        </div>

        <button
          class="activity-check"
          onclick="checkDragOrder()"
        >
          Check answer
        </button>

        <div id="activity-feedback"></div>

        ${navigationButtons()}

      </div>
    `;
  }


  return `
    <p>
      Activity type "${activity.type}" is not implemented.
    </p>
  `;
}


// ========================================
// NAVIGATION BUTTONS
// ========================================

function navigationButtons() {

  return `
    <div class="activity-navigation">

      <button
        class="activity-previous"
        onclick="previousQuestion()"
      >
        ← Previous question
      </button>

      <button
        class="activity-next"
        onclick="nextQuestion()"
      >
        Next question →
      </button>

    </div>
  `;
}


function nextQuestion() {

  const section =
    currentTopic.sections[currentSection];

  // Next question in this section
  if (
    currentActivity <
    section.activities.length - 1
  ) {

    currentActivity++;
    renderActivity();
    return;
  }

  // First question of next section
  if (
    currentSection <
    currentTopic.sections.length - 1
  ) {

    currentSection++;
    currentActivity = 0;
    renderActivity();
    return;
  }

  // Finished
  document.getElementById("activity-content").innerHTML = `
    <div class="activity-complete">

      <h3>Well done!</h3>

      <p>
        You have completed all the activities.
      </p>

    </div>
  `;
}


function previousQuestion() {

  // Previous question in this section
  if (currentActivity > 0) {

    currentActivity--;
    renderActivity();
    return;
  }

  // Last question of previous section
  if (currentSection > 0) {

    currentSection--;

    currentActivity =
      currentTopic.sections[currentSection]
        .activities.length - 1;

    renderActivity();
  }
}


// ========================================
// MULTIPLE CHOICE
// ========================================

function checkMultipleChoice() {

  const activity = getCurrentActivity();

  const selected =
    document.querySelector(
      'input[name="activity-answer"]:checked'
    );

  const feedback =
    document.getElementById("activity-feedback");

  if (!selected) {

    feedback.innerHTML = `
      <p class="incorrect">
        Please select an answer.
      </p>
    `;

    return;
  }

  const index = Number(selected.value);
  const correct = index === activity.answer;

  feedback.innerHTML = `
    <p class="${correct ? "correct" : "incorrect"}">
      ${correct ? "✓ Correct!" : "Not quite."}
    </p>

    <p>
      ${activity.feedback?.[index] || ""}
    </p>
  `;
}


// ========================================
// SINGLE FILL-IN
// ========================================

function checkTextAnswer() {

  const activity = getCurrentActivity();

  const input =
    document.getElementById("activity-text-answer");

  const feedback =
    document.getElementById("activity-feedback");

  const userAnswer =
    input.value.trim().toLowerCase();

  const correctAnswer =
    activity.answer.trim().toLowerCase();

  if (!userAnswer) {

    feedback.innerHTML = `
      <p class="incorrect">
        Please enter an answer.
      </p>
    `;

    return;
  }

  if (userAnswer === correctAnswer) {

    feedback.innerHTML = `
      <p class="correct">
        ✓ Correct!
      </p>
    `;

  } else {

    feedback.innerHTML = `
      <p class="incorrect">
        Not quite — try again.
      </p>
    `;
  }
}


// ========================================
// MULTIPLE FILL-IN FIELDS
// ========================================

function checkFillInFields() {

  const activity = getCurrentActivity();

  let allCorrect = true;

  activity.fields.forEach((field, index) => {

    const input =
      document.getElementById(
        `activity-answer-${index}`
      );

    const feedback =
      document.getElementById(
        `activity-field-feedback-${index}`
      );

    const userAnswer =
      input.value.trim().toLowerCase();

    const correctAnswer =
      field.answer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {

      feedback.innerHTML = `
        <span class="correct">
          ✓ Correct!
        </span>
      `;

    } else {

      feedback.innerHTML = `
        <span class="incorrect">
          Not quite — try again.
        </span>
      `;

      allCorrect = false;
    }
  });

  const overall =
    document.getElementById("activity-feedback");

  overall.innerHTML = allCorrect
    ? `<p class="correct">✓ All answers are correct!</p>`
    : `<p class="incorrect">Some answers are incorrect. Try again.</p>`;
}


// ========================================
// TRUE / FALSE
// ========================================

function checkTrueFalse() {

  const activity = getCurrentActivity();

  const selected =
    document.querySelector(
      'input[name="activity-answer"]:checked'
    );

  const feedback =
    document.getElementById("activity-feedback");

  if (!selected) {

    feedback.innerHTML = `
      <p class="incorrect">
        Please select True or False.
      </p>
    `;

    return;
  }

  const answer =
    selected.value === "true";

  const correct =
    answer === activity.answer;

  feedback.innerHTML = `
    <p class="${correct ? "correct" : "incorrect"}">
      ${correct ? "✓ Correct!" : "Not quite."}
    </p>

    <p>
      ${correct
        ? activity.correctFeedback || ""
        : activity.incorrectFeedback || ""}
    </p>
  `;
}


// ========================================
// DRAG AND DROP
// ========================================

function setupDragAndDrop() {

  let draggedItem = null;

  document.querySelectorAll(".drag-item")
    .forEach(item => {

      item.addEventListener("dragstart", () => {
        draggedItem = item;
        item.classList.add("dragging");
      });

      item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
      });
    });


  document.querySelectorAll(".drop-box")
    .forEach(box => {

      box.addEventListener("dragover", event => {
        event.preventDefault();
        box.classList.add("drag-over");
      });

      box.addEventListener("dragleave", () => {
        box.classList.remove("drag-over");
      });

      box.addEventListener("drop", event => {

        event.preventDefault();
        box.classList.remove("drag-over");

        if (!draggedItem) return;

        const list =
          document.querySelector(".drag-items");

        if (box.firstElementChild) {
          list.appendChild(box.firstElementChild);
        }

        box.appendChild(draggedItem);

        draggedItem = null;
      });
    });
}


function checkDragOrder() {

  const activity = getCurrentActivity();

  const boxes =
    document.querySelectorAll(".drop-box");

  const userOrder =
    [...boxes].map(box => {

      const item =
        box.querySelector(".drag-item");

      return item
        ? item.dataset.value
        : null;
    });

  const feedback =
    document.getElementById("activity-feedback");

  if (userOrder.includes(null)) {

    feedback.innerHTML = `
      <p class="incorrect">
        Please fill all the boxes.
      </p>
    `;

    return;
  }

  const correct =
    userOrder.every(
      (value, index) =>
        value === activity.answer[index]
    );

  feedback.innerHTML = correct
    ? `<p class="correct">✓ Correct!</p>`
    : `<p class="incorrect">Not quite — try again.</p>`;
}

// ========================================
// ESCAPE KEY
// ========================================

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeActivity();
  }

});