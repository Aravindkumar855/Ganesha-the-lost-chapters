
// ========================================
// GAME STATE
// ========================================

let gameState = {
    chaptersCompleted: 0,
    memoryFragments: [],
    score: 0,

    completedChapters: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    }
};


// ========================================
// COMPLETE CHAPTER ONLY ONCE
// ========================================

function completeChapterOnce(chapterNumber, reward) {

    // Already completed?
    // Do NOT give the reward again.
    if (gameState.completedChapters[chapterNumber]) {

        console.log(
            "Chapter",
            chapterNumber,
            "already completed. No reward added."
        );

        return false;
    }


    // Mark chapter as permanently completed
    gameState.completedChapters[chapterNumber] = true;


    // Give reward only once
    gameState.score += reward;


    // Never allow progress to go backwards
    gameState.chaptersCompleted =
        Math.max(
            gameState.chaptersCompleted,
            chapterNumber
        );


    console.log(
        "Chapter",
        chapterNumber,
        "completed for the first time."
    );

    console.log(
        "Reward:",
        reward
    );

    console.log(
        "Total Score:",
        gameState.score
    );


    return true;
}


console.log("Ganesha — The Lost Chapters loaded!");


// ========================================
// STORY PROGRESS
// ========================================

function updateStoryProgress() {

    const progressFill =
        document.getElementById("progress-fill");

    const progressText =
        document.getElementById("progress-text");


    if (progressFill) {

        progressFill.style.width =
            (gameState.chaptersCompleted / 5) * 100 + "%";

    }


    if (progressText) {

        progressText.textContent =
            gameState.chaptersCompleted +
            " / 5 CHAPTERS";

    }


    // Keep chapter map visually synchronized
    updateChapterMap();


}


// ========================================
// UPDATE CHAPTER MAP
// ========================================

function updateChapterMap() {

    // ------------------------------------
    // CHAPTER 1
    // ------------------------------------

    const chapter1 =
        document.getElementById("chapter-1");

    if (chapter1) {

        if (gameState.completedChapters[1]) {

            chapter1.classList.remove("locked");
            chapter1.classList.add("unlocked");
            chapter1.classList.add("completed");

            const icon =
                chapter1.querySelector(".memory-icon");

            const status =
                chapter1.querySelector(".chapter-status");

            if (icon) {
                icon.textContent = "✅";
            }

            if (status) {
                status.textContent = "COMPLETED";
            }

        }

    }


    // ------------------------------------
    // CHAPTER 2
    // ------------------------------------

    const chapter2 =
        document.getElementById("chapter-2");

    if (chapter2) {

        if (gameState.completedChapters[2]) {

            chapter2.classList.remove("locked");
            chapter2.classList.add("unlocked");
            chapter2.classList.add("completed");

            const icon =
                chapter2.querySelector(".memory-icon");

            const status =
                chapter2.querySelector(".chapter-status");

            if (icon) {
                icon.textContent = "✅";
            }

            if (status) {
                status.textContent = "COMPLETED";
            }

        }
        else if (
            gameState.chaptersCompleted >= 1
        ) {

            chapter2.classList.remove("locked");
            chapter2.classList.add("unlocked");

            const icon =
                chapter2.querySelector(".memory-icon");

            const status =
                chapter2.querySelector(".chapter-status");

            if (icon) {
                icon.textContent = "💎";
            }

            if (status) {
                status.textContent = "UNLOCKED";
            }

        }

    }


    // ------------------------------------
    // CHAPTER 3
    // ------------------------------------

    const chapter3 =
        document.getElementById("chapter-3");

    if (chapter3) {

        if (gameState.completedChapters[3]) {

            chapter3.classList.remove("locked");
            chapter3.classList.add("unlocked");
            chapter3.classList.add("completed");

            const icon =
                chapter3.querySelector(".memory-icon");

            const status =
                chapter3.querySelector(".chapter-status");

            if (icon) {
                icon.textContent = "✅";
            }

            if (status) {
                status.textContent = "✓ COMPLETED";
            }

        }
        else if (
            gameState.chaptersCompleted >= 2
        ) {

            chapter3.classList.remove("locked");
            chapter3.classList.add("unlocked");

            const icon =
                chapter3.querySelector(".memory-icon");

            const status =
                chapter3.querySelector(".chapter-status");

            if (icon) {
                icon.textContent = "💎";
            }

            if (status) {
                status.textContent = "UNLOCKED";
            }

        }

    }


    // ------------------------------------
    // CHAPTER 4
    // ------------------------------------

    const chapter4 =
        document.getElementById("chapter-4");

    if (chapter4) {

        if (gameState.completedChapters[4]) {

            chapter4.classList.remove("locked");
            chapter4.classList.add("unlocked");
            chapter4.classList.add("completed");

            const icon =
                chapter4.querySelector(".memory-icon");

            const status =
                chapter4.querySelector(".chapter-status");

            if (icon) {
                icon.textContent = "✅";
            }

            if (status) {
                status.textContent = "✓ COMPLETED";
            }

        }
        else if (
            gameState.chaptersCompleted >= 3
        ) {

            chapter4.classList.remove("locked");
            chapter4.classList.add("unlocked");

            const icon =
                chapter4.querySelector(".memory-icon");

            const status =
                chapter4.querySelector(".chapter-status");

            if (icon) {
                icon.textContent = "💎";
            }

            if (status) {
                status.textContent = "UNLOCKED";
            }

        }

    }


    // ------------------------------------
    // CHAPTER 5
    // ------------------------------------

    const chapter5 =
        document.getElementById("chapter-5");

    if (chapter5) {

        if (gameState.completedChapters[5]) {

            chapter5.classList.remove("locked");
            chapter5.classList.add("unlocked");
            chapter5.classList.add("completed");

            const icon =
                chapter5.querySelector(".memory-icon");

            const status =
                chapter5.querySelector(".chapter-status");

            if (icon) {
                icon.textContent = "✅";
            }

            if (status) {
                status.textContent = "✓ COMPLETED";
            }

        }
        else if (
            gameState.chaptersCompleted >= 4
        ) {

            chapter5.classList.remove("locked");
            chapter5.classList.add("unlocked");

            const icon =
                chapter5.querySelector(".memory-icon");

            const status =
                chapter5.querySelector(".chapter-status");

            if (icon) {
                icon.textContent = "💎";
            }

            if (status) {
                status.textContent = "UNLOCKED";
            }

        }

    }

}


// ========================================
// MEMORY FRAGMENT SYSTEM
// ========================================

function collectMemoryFragment(fragment) {

    // Prevent duplicate memory fragments
    if (
        gameState.memoryFragments.includes(fragment)
    ) {

        console.log(
            "Memory already collected:",
            fragment
        );

        return false;
    }


    gameState.memoryFragments.push(fragment);


    console.log(
        "Memory Fragment Collected:",
        fragment
    );

    console.log(
        "Total Fragments:",
        gameState.memoryFragments.length
    );

    console.log(
        "Current Score:",
        gameState.score
    );


    return true;
}


// ========================================
// UNLOCK CHAPTER 2
// ========================================

function unlockChapter2() {

    const chapter1 =
        document.getElementById("chapter-1");

    if (chapter1) {

        chapter1.classList.remove("locked");
        chapter1.classList.add("unlocked");
        chapter1.classList.add("completed");

        const icon =
            chapter1.querySelector(".memory-icon");

        const status =
            chapter1.querySelector(".chapter-status");

        if (icon) {
            icon.textContent = "✅";
        }

        if (status) {
            status.textContent = "COMPLETED";
        }

    }


    const chapter2 =
        document.getElementById("chapter-2");

    if (chapter2) {

        chapter2.classList.remove("locked");
        chapter2.classList.add("unlocked");

        const icon =
            chapter2.querySelector(".memory-icon");

        const status =
            chapter2.querySelector(".chapter-status");

        if (icon) {
            icon.textContent = "💎";
        }

        if (status) {
            status.textContent = "UNLOCKED";
        }

    }


    updateStoryProgress();

}


// ========================================
// UNLOCK CHAPTER 3
// ========================================

function unlockChapter3() {

    const chapter3 =
        document.getElementById("chapter-3");

    if (!chapter3) {
        return;
    }


    chapter3.classList.remove("locked");
    chapter3.classList.add("unlocked");


    const icon =
        chapter3.querySelector(".memory-icon");

    const status =
        chapter3.querySelector(".chapter-status");


    if (icon) {
        icon.textContent = "💎";
    }


    if (status) {

        if (gameState.completedChapters[3]) {
            status.textContent = "✓ COMPLETED";
        }
        else {
            status.textContent = "UNLOCKED";
        }

    }

}


// ========================================
// UNLOCK CHAPTER 4
// ========================================

function unlockChapter4() {

    const chapter4 =
        document.getElementById("chapter-4");

    if (!chapter4) {
        return;
    }


    chapter4.classList.remove("locked");
    chapter4.classList.add("unlocked");


    const icon =
        chapter4.querySelector(".memory-icon");

    const status =
        chapter4.querySelector(".chapter-status");


    if (icon) {
        icon.textContent = "💎";
    }


    if (status) {
        status.textContent = "UNLOCKED";
    }


    console.log(
        "Chapter 4 unlocked!"
    );

}


// ========================================
// MAIN MENU
// ========================================

const startButton =
    document.getElementById("start-button");

if (startButton) {

    startButton.addEventListener(
        "click",
        function () {

            document
                .getElementById("main-menu")
                .style.display = "none";

            document
                .getElementById("story-map")
                .style.display = "block";


            updateStoryProgress();

        }
    );

}


// ========================================
// STORY MAP
// ========================================


// ----------------------------------------
// CHAPTER 1
// ----------------------------------------

const chapter1Button =
    document.getElementById("chapter-1");

if (chapter1Button) {

    chapter1Button.addEventListener(
        "click",
        function () {

            document
                .getElementById("story-map")
                .style.display = "none";

            document
                .getElementById("chapter-1-screen")
                .style.display = "block";


            // Reset only Chapter 1's
            // temporary gameplay state.
            // DO NOT reset score/progress.
            startChapter1();

        }
    );

}


// ----------------------------------------
// CHAPTER 2
// ----------------------------------------

const chapter2Button =
    document.getElementById("chapter-2");

if (chapter2Button) {

    chapter2Button.addEventListener(
        "click",
        function () {

            if (
                gameState.chaptersCompleted >= 1
            ) {

                document
                    .getElementById("story-map")
                    .style.display = "none";

                document
                    .getElementById("chapter-2-screen")
                    .style.display = "block";

                startGuardianChapter();

            }
            else {

                alert(
                    "This chapter is locked.\n" +
                    "Complete Chapter 1 first."
                );

            }

        }
    );

}


// ----------------------------------------
// CHAPTER 3
// ----------------------------------------

const chapter3Button =
    document.getElementById("chapter-3");

if (chapter3Button) {

    chapter3Button.addEventListener(
        "click",
        function () {

            if (
                gameState.chaptersCompleted >= 2
            ) {

                document
                    .getElementById("story-map")
                    .style.display = "none";

                document
                    .getElementById("chapter-3-screen")
                    .style.display = "block";

                startTransformationChapter();

            }
            else {

                alert(
                    "This chapter is locked.\n" +
                    "Complete Chapter 2 first."
                );

            }

        }
    );

}


// ----------------------------------------
// CHAPTER 4
// ----------------------------------------

// ----------------------------------------
// CHAPTER 4 — THE WISDOM
// ----------------------------------------

const chapter4Button =
    document.getElementById("chapter-4");

if (chapter4Button) {

    chapter4Button.addEventListener(
        "click",
        function () {

            if (
                gameState.chaptersCompleted >= 3
            ) {

                const storyMap =
                    document.getElementById("story-map");

                const chapter4Screen =
                    document.getElementById("chapter-4-screen");

                if (storyMap) {
                    storyMap.style.display = "none";
                }

                if (chapter4Screen) {
                    chapter4Screen.style.display = "block";
                }

                startWisdomChapter();

            }
            else {

                alert(
                    "This chapter is locked.\n" +
                    "Complete Chapter 3 first."
                );

            }

        }
    );

}

// ----------------------------------------
// CHAPTER 5 — MUSHAK'S JOURNEY
// ----------------------------------------

const chapter5Button =
    document.getElementById("chapter-5");

if (chapter5Button) {

    chapter5Button.addEventListener(
        "click",
        function () {

            if (gameState.chaptersCompleted >= 4) {

    const storyMap =
        document.getElementById("story-map");

    const chapter5Screen =
        document.getElementById("chapter-5-screen");

    if (storyMap) {
        storyMap.style.display = "none";
    }

    if (chapter5Screen) {
        chapter5Screen.style.display = "block";
    }

    startMushakJourney();

}
            else {

                alert(
                    "This chapter is locked.\n" +
                    "Complete Chapter 4 first."
                );

            }

        }
    );

}

// ========================================
// BACK TO MENU
// ========================================

const backButton =
    document.getElementById("back-button");

if (backButton) {

    backButton.addEventListener(
        "click",
        function () {

            document
                .getElementById("story-map")
                .style.display = "none";

            document
                .getElementById("main-menu")
                .style.display = "block";

        }
    );

}


// ========================================
// CHAPTER 1 START / RESET
// ========================================

function startChapter1() {

    // ------------------------------------
    // Reset temporary Chapter 1 state
    // ------------------------------------

    memoryCollected = false;

    cluesCollected = 0;

    collectedClueOrder = [];

    puzzleSequence = [];

    correctPuzzleSequence = [];


    // ------------------------------------
    // Reset player position
    // ------------------------------------

    player.x = 50;
    player.y = 50;


    // ------------------------------------
    // Reset clues
    // ------------------------------------

    for (let i = 1; i <= 3; i++) {

        const clue =
            document.getElementById("clue-" + i);

        if (clue) {

            clue.dataset.collected = "false";

            clue.style.display = "block";

        }

    }


    // ------------------------------------
    // Reset memory fragment
    // ------------------------------------

    const fragment =
        document.getElementById("memory-fragment");

    if (fragment) {

        fragment.style.display = "none";

    }


    // ------------------------------------
    // Reset puzzle panel
    // ------------------------------------

    const puzzlePanel =
        document.getElementById("puzzle-panel");

    if (puzzlePanel) {

        puzzlePanel.style.display = "none";

    }


    // ------------------------------------
    // Reset puzzle status
    // ------------------------------------

    const puzzleStatus =
        document.getElementById("puzzle-status");

    if (puzzleStatus) {

        puzzleStatus.textContent =
            "Find all three clues first.";

    }


    updateClueCounter();

    updatePlayer();

}


// ========================================
// CHAPTER 1 BACK BUTTON
// ========================================

const chapter1Back =
    document.getElementById("chapter-1-back");

if (chapter1Back) {

    chapter1Back.addEventListener(
        "click",
        function () {

            document
                .getElementById("chapter-1-screen")
                .style.display = "none";

            document
                .getElementById("story-map")
                .style.display = "block";


            updateStoryProgress();

        }
    );

}


// ========================================
// PLAYER
// ========================================

let player = {

    x: 50,

    y: 50,

    speed: 1.25

};


// ========================================
// MEMORY COLLECTION
// ========================================

let memoryCollected = false;

let cluesCollected = 0;


// Stores clue collection order
let collectedClueOrder = [];


// Stores puzzle answer sequence
let puzzleSequence = [];


// ========================================
// UPDATE PLAYER
// ========================================

function updatePlayer() {

    const playerElement =
        document.getElementById("player");

    if (!playerElement) {
        return;
    }


    playerElement.style.left =
        player.x + "%";

    playerElement.style.top =
        player.y + "%";


    checkClues();

    checkMemoryFragment();

}


// ========================================
// CHECK CLUES
// ========================================

function checkClues() {

    const chapterScreen =
        document.getElementById(
            "chapter-1-screen"
        );

    const playerElement =
        document.getElementById("player");


    if (
        !chapterScreen ||
        chapterScreen.style.display !== "block" ||
        !playerElement
    ) {

        return;

    }


    if (cluesCollected >= 3) {
        return;
    }


    const playerRect =
        playerElement.getBoundingClientRect();


    const playerCenterX =
        playerRect.left +
        playerRect.width / 2;


    const playerCenterY =
        playerRect.top +
        playerRect.height / 2;


    for (let i = 1; i <= 3; i++) {

        const clue =
            document.getElementById(
                "clue-" + i
            );


        if (
            !clue ||
            clue.dataset.collected === "true"
        ) {

            continue;

        }


        const clueRect =
            clue.getBoundingClientRect();


        const clueCenterX =
            clueRect.left +
            clueRect.width / 2;


        const clueCenterY =
            clueRect.top +
            clueRect.height / 2;


        const distanceX =
            playerCenterX -
            clueCenterX;


        const distanceY =
            playerCenterY -
            clueCenterY;


        if (
            Math.abs(distanceX) <= 35 &&
            Math.abs(distanceY) <= 45
        ) {

            clue.dataset.collected = "true";

            clue.style.display = "none";

            cluesCollected++;

            collectedClueOrder.push(i);


            console.log(
                "Clue collection order:",
                collectedClueOrder
            );


            updateClueCounter();


            console.log(
                "Clue collected:",
                i,
                "Total:",
                cluesCollected
            );


            if (cluesCollected === 3) {

                createPuzzleOrder();


                const puzzlePanel =
                    document.getElementById(
                        "puzzle-panel"
                    );


                if (puzzlePanel) {

                    puzzlePanel.style.display =
                        "block";

                }

            }

        }

    }

}


// ========================================
// UPDATE CLUE COUNTER
// ========================================

function updateClueCounter() {

    const counter =
        document.getElementById(
            "clue-counter"
        );


    if (!counter) {
        return;
    }


    counter.textContent =
        "CLUES FOUND: " +
        cluesCollected +
        " / 3";

}


// ========================================
// CHECK MEMORY FRAGMENT
// ========================================

function checkMemoryFragment() {

    const chapterScreen =
        document.getElementById(
            "chapter-1-screen"
        );

    const playerElement =
        document.getElementById("player");

    const fragment =
        document.getElementById(
            "memory-fragment"
        );


    if (
        !chapterScreen ||
        chapterScreen.style.display !== "block"
    ) {

        return;

    }


    if (
        !playerElement ||
        !fragment ||
        memoryCollected
    ) {

        return;

    }


    const playerRect =
        playerElement.getBoundingClientRect();


    const fragmentRect =
        fragment.getBoundingClientRect();


    const playerCenterX =
        playerRect.left +
        playerRect.width / 2;


    const playerCenterY =
        playerRect.top +
        playerRect.height / 2;


    const fragmentCenterX =
        fragmentRect.left +
        fragmentRect.width / 2;


    const fragmentCenterY =
        fragmentRect.top +
        fragmentRect.height / 2;


    const distanceX =
        playerCenterX -
        fragmentCenterX;


    const distanceY =
        playerCenterY -
        fragmentCenterY;


    const horizontalRange = 32;

    const verticalRange = 50;


    if (
        Math.abs(distanceX) <= horizontalRange &&
        Math.abs(distanceY) <= verticalRange
    ) {

        memoryCollected = true;


        fragment.style.display = "none";


        // --------------------------------
        // Complete Chapter 1 ONCE
        // --------------------------------

        const firstCompletion =
            completeChapterOnce(1, 100);


        // --------------------------------
        // Store memory fragment only once
        // --------------------------------

        collectMemoryFragment(
            "Chapter 1 - The Beginning"
        );


        // --------------------------------
        // Unlock Chapter 2
        // --------------------------------

        unlockChapter2();


        // --------------------------------
        // Show completion panel
        // --------------------------------

        const memoryPanel =
            document.getElementById(
                "memory-restored-panel"
            );


        if (memoryPanel) {

            memoryPanel.style.display =
                "flex";

        }


        console.log(
            "Chapter 1 first completion:",
            firstCompletion
        );

    }

}


// ========================================
// KEYBOARD CONTROLS
// ========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "ArrowUp" ||
            event.key.toLowerCase() === "w"
        ) {

            player.y -= player.speed;

        }


        if (
            event.key === "ArrowDown" ||
            event.key.toLowerCase() === "s"
        ) {

            player.y += player.speed;

        }


        if (
            event.key === "ArrowLeft" ||
            event.key.toLowerCase() === "a"
        ) {

            player.x -= player.speed;

        }


        if (
            event.key === "ArrowRight" ||
            event.key.toLowerCase() === "d"
        ) {

            player.x += player.speed;

        }


        player.x =
            Math.max(
                5,
                Math.min(95, player.x)
            );


        player.y =
            Math.max(
                5,
                Math.min(95, player.y)
            );


        updatePlayer();

    }
);


// ========================================
// INITIAL PLAYER POSITION
// ========================================

updatePlayer();

updateStoryProgress();


// ========================================
// MOBILE CONTROLS
// ========================================

let movingDirection = null;


// ----------------------------------------
// Start moving
// ----------------------------------------

function startMoving(direction) {

    movingDirection = direction;

}


// ----------------------------------------
// Stop moving
// ----------------------------------------

function stopMoving() {

    movingDirection = null;

}


// ========================================
// MOBILE MOVEMENT
// ========================================

function mobileMovement() {

    const mobileSpeed = 0.90;


    if (movingDirection === "up") {

        player.y -= mobileSpeed;

    }


    if (movingDirection === "down") {

        player.y += mobileSpeed;

    }


    if (movingDirection === "left") {

        player.x -= mobileSpeed;

    }


    if (movingDirection === "right") {

        player.x += mobileSpeed;

    }


    player.x =
        Math.max(
            5,
            Math.min(95, player.x)
        );


    player.y =
        Math.max(
            5,
            Math.min(95, player.y)
        );


    updatePlayer();

}


// ========================================
// GAME LOOP
// ========================================

function gameLoop() {

    mobileMovement();

    requestAnimationFrame(gameLoop);

}

gameLoop();


// ========================================
// MOBILE BUTTONS
// ========================================


// ----------------------------------------
// UP
// ----------------------------------------

const upButton =
    document.getElementById("move-up");

if (upButton) {

    upButton.addEventListener(
        "pointerdown",
        function() {

            startMoving("up");

        }
    );

    upButton.addEventListener(
        "pointerup",
        stopMoving
    );

    upButton.addEventListener(
        "pointerleave",
        stopMoving
    );

    upButton.addEventListener(
        "pointercancel",
        stopMoving
    );

}


// ----------------------------------------
// DOWN
// ----------------------------------------

const downButton =
    document.getElementById("move-down");

if (downButton) {

    downButton.addEventListener(
        "pointerdown",
        function() {

            startMoving("down");

        }
    );

    downButton.addEventListener(
        "pointerup",
        stopMoving
    );

    downButton.addEventListener(
        "pointerleave",
        stopMoving
    );

    downButton.addEventListener(
        "pointercancel",
        stopMoving
    );

}


// ----------------------------------------
// LEFT
// ----------------------------------------

const leftButton =
    document.getElementById("move-left");

if (leftButton) {

    leftButton.addEventListener(
        "pointerdown",
        function() {

            startMoving("left");

        }
    );

    leftButton.addEventListener(
        "pointerup",
        stopMoving
    );

    leftButton.addEventListener(
        "pointerleave",
        stopMoving
    );

    leftButton.addEventListener(
        "pointercancel",
        stopMoving
    );

}


// ----------------------------------------
// RIGHT
// ----------------------------------------

const rightButton =
    document.getElementById("move-right");

if (rightButton) {

    rightButton.addEventListener(
        "pointerdown",
        function() {

            startMoving("right");

        }
    );

    rightButton.addEventListener(
        "pointerup",
        stopMoving
    );

    rightButton.addEventListener(
        "pointerleave",
        stopMoving
    );

    rightButton.addEventListener(
        "pointercancel",
        stopMoving
    );

}


// ========================================
// PUZZLE SYMBOLS
// ========================================

let correctPuzzleSequence = [];


const puzzleSymbols =
    document.querySelectorAll(
        ".puzzle-symbol"
    );


// ----------------------------------------
// Convert clue number into symbol ID
// ----------------------------------------

function getSymbolId(clueNumber) {

    if (clueNumber === 1) {
        return "symbol-lamp";
    }


    if (clueNumber === 2) {
        return "symbol-trident";
    }


    if (clueNumber === 3) {
        return "symbol-scroll";
    }

}


// ----------------------------------------
// Create puzzle answer
// ----------------------------------------

function createPuzzleOrder() {

    correctPuzzleSequence =
        collectedClueOrder.map(
            getSymbolId
        );


    puzzleSequence = [];


    console.log(
        "Dynamic puzzle order:",
        correctPuzzleSequence
    );

}


// ----------------------------------------
// Puzzle button clicks
// ----------------------------------------

puzzleSymbols.forEach(
    function(symbol) {

        symbol.addEventListener(
            "click",
            function() {

                puzzleSequence.push(
                    symbol.id
                );


                const currentStep =
                    puzzleSequence.length - 1;


                // ------------------------
                // Wrong answer
                // ------------------------

                if (
                    puzzleSequence[currentStep] !==
                    correctPuzzleSequence[currentStep]
                ) {

                    puzzleSequence = [];


                    const status =
                        document.getElementById(
                            "puzzle-status"
                        );


                    if (status) {

                        status.textContent =
                            "❌ Wrong order! Try again.";

                    }


                    return;

                }


                // ------------------------
                // Correct but not finished
                // ------------------------

                if (
                    puzzleSequence.length <
                    correctPuzzleSequence.length
                ) {

                    const status =
                        document.getElementById(
                            "puzzle-status"
                        );


                    if (status) {

                        status.textContent =
                            "✨ Correct! Continue...";

                    }


                    return;

                }


                // ------------------------
                // Puzzle solved
                // ------------------------

                const status =
                    document.getElementById(
                        "puzzle-status"
                    );


                if (status) {

                    status.textContent =
                        "✅ PUZZLE SOLVED!";

                }


                const fragment =
                    document.getElementById(
                        "memory-fragment"
                    );


                if (fragment) {

                    fragment.style.display =
                        "block";

                }

            }
        );

    }
);


// ========================================
// MEMORY PANEL - CONTINUE
// ========================================

const continueMemory =
    document.getElementById(
        "continue-memory"
    );


if (continueMemory) {

    continueMemory.addEventListener(
        "click",
        function() {

            const memoryPanel =
                document.getElementById(
                    "memory-restored-panel"
                );


            if (memoryPanel) {

                memoryPanel.style.display =
                    "none";

            }


            const chapter1Screen =
                document.getElementById(
                    "chapter-1-screen"
                );


            if (chapter1Screen) {

                chapter1Screen.style.display =
                    "none";

            }


            const storyMap =
                document.getElementById(
                    "story-map"
                );


            if (storyMap) {

                storyMap.style.display =
                    "block";

            }


            updateStoryProgress();

        }
    );

}


// ========================================
// CHAPTER 2 — THE GUARDIAN GAME
// ========================================

let guardianWave = 1;

let guardianScore = 0;

let guardianLives = 3;

let guardianActive = false;

let guardianExpectedSymbol = null;

let guardianTimer = null;


// ========================================
// START CHAPTER 2
// ========================================

function startGuardianChapter() {

    guardianWave = 1;

    guardianScore = 0;

    guardianLives = 3;

    guardianActive = true;


    const completePanel =
        document.getElementById(
            "guardian-complete"
        );


    if (completePanel) {

        completePanel.style.display =
            "none";

    }


    updateGuardianUI();

    startGuardianWave();

}


// ========================================
// START WAVE
// ========================================

function startGuardianWave() {

    if (!guardianActive) {
        return;
    }


    if (guardianWave > 5) {

        completeGuardianChapter();

        return;

    }


    const symbols = [
        "lamp",
        "trident",
        "scroll"
    ];


    guardianExpectedSymbol =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    const message =
        document.getElementById(
            "guardian-message"
        );


    const waveObject =
        document.getElementById(
            "guardian-wave-object"
        );


    let symbolText = "🪔";


    if (
        guardianExpectedSymbol ===
        "trident"
    ) {

        symbolText = "🔱";

    }


    if (
        guardianExpectedSymbol ===
        "scroll"
    ) {

        symbolText = "📜";

    }


    if (message) {

        message.textContent =
            "BLOCK THIS: " +
            symbolText;

    }


    if (waveObject) {

        waveObject.textContent = "✦";


        waveObject.classList.remove(
            "guardian-wave-active"
        );


        void waveObject.offsetWidth;


        waveObject.classList.add(
            "guardian-wave-active"
        );

    }


    clearTimeout(guardianTimer);


    guardianTimer =
        setTimeout(
            function() {

                guardianMissed();

            },
            2400
        );

}


// ========================================
// SYMBOL BUTTONS
// ========================================

document
    .querySelectorAll(".guardian-symbol")
    .forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    if (!guardianActive) {
                        return;
                    }


                    const selectedSymbol =
                        button.dataset.symbol;


                    if (
                        selectedSymbol ===
                        guardianExpectedSymbol
                    ) {

                        guardianSuccess();

                    }
                    else {

                        guardianMissed();

                    }

                }
            );

        }
    );


// ========================================
// SUCCESS
// ========================================

function guardianSuccess() {

    clearTimeout(guardianTimer);


    guardianScore += 100;

    guardianWave++;


    updateGuardianUI();


    const message =
        document.getElementById(
            "guardian-message"
        );


    if (message) {

        message.textContent =
            "✨ PERFECT! The gate is protected.";

    }


    const waveObject =
        document.getElementById(
            "guardian-wave-object"
        );


    if (waveObject) {

        waveObject.classList.remove(
            "guardian-wave-active"
        );

    }


    setTimeout(
        function() {

            startGuardianWave();

        },
        700
    );

}


// ========================================
// MISSED / WRONG SYMBOL
// ========================================

function guardianMissed() {

    clearTimeout(guardianTimer);


    guardianLives--;


    updateGuardianUI();


    const message =
        document.getElementById(
            "guardian-message"
        );


    if (message) {

        message.textContent =
            "⚠️ The guardian gate was weakened!";

    }


    const waveObject =
        document.getElementById(
            "guardian-wave-object"
        );


    if (waveObject) {

        waveObject.classList.remove(
            "guardian-wave-active"
        );

    }


    if (guardianLives <= 0) {

        guardianActive = false;


        setTimeout(
            function() {

                alert(
                    "🛡️ THE GATE HAS FALLEN!\n\n" +
                    "Try again and protect the sacred entrance."
                );


                startGuardianChapter();

            },
            500
        );


        return;

    }


    setTimeout(
        function() {

            startGuardianWave();

        },
        700
    );

}


// ========================================
// UPDATE GUARDIAN UI
// ========================================

function updateGuardianUI() {

    const wave =
        document.getElementById(
            "guardian-wave"
        );


    const score =
        document.getElementById(
            "guardian-score"
        );


    const lives =
        document.getElementById(
            "guardian-lives"
        );


    if (wave) {

        wave.textContent =
            "WAVE " +
            Math.min(
                guardianWave,
                5
            ) +
            " / 5";

    }


    if (score) {

        score.textContent =
            "SCORE: " +
            guardianScore;

    }


    if (lives) {

        let hearts = "";


        for (
            let i = 0;
            i < guardianLives;
            i++
        ) {

            hearts += "❤️ ";

        }


        lives.textContent =
            hearts || "💔";

    }

}


// ========================================
// COMPLETE CHAPTER 2
// ========================================

function completeGuardianChapter() {

    guardianActive = false;

    clearTimeout(guardianTimer);


    /*
       Chapter 2 gives its main game reward
       only ONCE.

       Replay does not increase the
       permanent game score again.
    */

    const firstCompletion =
        completeChapterOnce(2, 250);


    // ------------------------------------
    // Complete Chapter 2 visually
    // ------------------------------------

    markChapter2Completed();


    // ------------------------------------
    // Unlock Chapter 3
    // ------------------------------------

    unlockChapter3();


    updateStoryProgress();


    updateGuardianUI();


    console.log(
        "Chapter 2 first completion:",
        firstCompletion
    );


    // ------------------------------------
    // Show completion panel
    // ------------------------------------

    const panel =
        document.getElementById(
            "guardian-complete"
        );


    if (panel) {

        panel.style.display =
            "flex";

    }

}


// ========================================
// MARK CHAPTER 2 COMPLETED
// ========================================

function markChapter2Completed() {

    const chapter2 =
        document.getElementById(
            "chapter-2"
        );


    if (!chapter2) {
        return;
    }


    chapter2.classList.remove(
        "locked"
    );


    chapter2.classList.add(
        "unlocked"
    );


    chapter2.classList.add(
        "completed"
    );


    const icon =
        chapter2.querySelector(
            ".memory-icon"
        );


    const status =
        chapter2.querySelector(
            ".chapter-status"
        );


    if (icon) {

        icon.textContent = "✅";

    }


    if (status) {

        status.textContent =
            "COMPLETED";

    }

}


// ========================================
// CONTINUE FROM CHAPTER 2
// ========================================

const continueGuardian =
    document.getElementById(
        "continue-guardian"
    );


if (continueGuardian) {

    continueGuardian.addEventListener(
        "click",
        function() {

            const panel =
                document.getElementById(
                    "guardian-complete"
                );


            if (panel) {

                panel.style.display =
                    "none";

            }


            const chapter2Screen =
                document.getElementById(
                    "chapter-2-screen"
                );


            if (chapter2Screen) {

                chapter2Screen.style.display =
                    "none";

            }


            const storyMap =
                document.getElementById(
                    "story-map"
                );


            if (storyMap) {

                storyMap.style.display =
                    "block";

            }


            updateStoryProgress();

        }
    );

}


// ========================================
// CHAPTER 2 BACK BUTTON
// ========================================

const chapter2Back =
    document.getElementById(
        "chapter-2-back"
    );


if (chapter2Back) {

    chapter2Back.addEventListener(
        "click",
        function() {

            guardianActive = false;


            clearTimeout(
                guardianTimer
            );


            const chapter2Screen =
                document.getElementById(
                    "chapter-2-screen"
                );


            const storyMap =
                document.getElementById(
                    "story-map"
                );


            if (chapter2Screen) {

                chapter2Screen.style.display =
                    "none";

            }


            if (storyMap) {

                storyMap.style.display =
                    "block";

            }


            updateStoryProgress();

        }
    );

}


// =========================================================
// CHAPTER 3 — THE TRANSFORMATION
// =========================================================

let transformationMoves = 0;

let transformationRotations =
    [0, 0, 0, 0];

let transformationActive = false;

let transformationCompleted = false;


// ---------------------------------------------------------
// START CHAPTER 3
// ---------------------------------------------------------

function startTransformationChapter() {

    transformationMoves = 0;

    transformationActive = true;


    /*
       IMPORTANT:

       We DO NOT reset transformationCompleted here.

       The player can replay Chapter 3,
       but its reward must only be given once.
    */


    transformationRotations =
        [90, 180, 270, 90];


    const completePanel =
        document.getElementById(
            "transformation-complete"
        );


    if (completePanel) {

        completePanel.style.display =
            "none";

    }


    const puzzle =
        document.getElementById(
            "seal-puzzle"
        );


    if (puzzle) {

        puzzle.classList.remove(
            "seal-solved"
        );

    }


    const message =
        document.getElementById(
            "transformation-message"
        );


    if (message) {

        message.textContent =
            "Rotate the four pieces to restore the sacred symbol.";


        message.classList.remove(
            "success"
        );

    }


    updateTransformationUI();

    applyTransformationRotations();

    updateCorrectPieces();

}


// ---------------------------------------------------------
// APPLY ROTATIONS
// ---------------------------------------------------------

function applyTransformationRotations() {

    const pieces =
        document.querySelectorAll(
            ".seal-piece"
        );


    pieces.forEach(
        function(piece) {

            const index =
                Number(
                    piece.dataset.index
                );


            const svg =
                piece.querySelector(
                    ".piece-svg"
                );


            if (svg) {

                svg.style.transform =
                    "rotate(" +
                    transformationRotations[index] +
                    "deg)";

            }

        }
    );

}


// ---------------------------------------------------------
// UPDATE CORRECT PIECES
// ---------------------------------------------------------

function updateCorrectPieces() {

    const pieces =
        document.querySelectorAll(
            ".seal-piece"
        );


    pieces.forEach(
        function(piece) {

            const index =
                Number(
                    piece.dataset.index
                );


            if (
                transformationRotations[index] ===
                0
            ) {

                piece.classList.add(
                    "piece-correct"
                );

            }
            else {

                piece.classList.remove(
                    "piece-correct"
                );

            }

        }
    );

}


// ---------------------------------------------------------
// UPDATE MOVES
// ---------------------------------------------------------

function updateTransformationUI() {

    const moves =
        document.getElementById(
            "transformation-moves"
        );


    if (moves) {

        moves.textContent =
            "MOVES: " +
            transformationMoves;

    }

}


// ---------------------------------------------------------
// ROTATE ONE PIECE
// ---------------------------------------------------------

function rotateTransformationPiece(index) {

    if (!transformationActive) {
        return;
    }


    if (
        index < 0 ||
        index > 3
    ) {

        return;

    }


    transformationRotations[index] += 90;


    if (
        transformationRotations[index] >=
        360
    ) {

        transformationRotations[index] = 0;

    }


    transformationMoves++;


    const piece =
        document.querySelector(
            '.seal-piece[data-index="' +
            index +
            '"]'
        );


    if (piece) {

        const svg =
            piece.querySelector(
                ".piece-svg"
            );


        if (svg) {

            svg.style.transform =
                "rotate(" +
                transformationRotations[index] +
                "deg)";

        }

    }


    updateTransformationUI();

    updateCorrectPieces();

    checkTransformationPuzzle();

}


// ---------------------------------------------------------
// CHECK PUZZLE
// ---------------------------------------------------------

function checkTransformationPuzzle() {

    for (
        let i = 0;
        i < transformationRotations.length;
        i++
    ) {

        if (
            transformationRotations[i] !== 0
        ) {

            return;

        }

    }


    completeTransformationChapter();

}


// ---------------------------------------------------------
// COMPLETE CHAPTER 3
// ---------------------------------------------------------

function completeTransformationChapter() {

    if (!transformationActive) {
        return;
    }


    transformationActive = false;


    const puzzle =
        document.getElementById(
            "seal-puzzle"
        );


    if (puzzle) {

        puzzle.classList.add(
            "seal-solved"
        );

    }


    const message =
        document.getElementById(
            "transformation-message"
        );


    if (message) {

        message.textContent =
            "✨ THE SACRED SWASTIK HAS BEEN RESTORED!";


        message.classList.add(
            "success"
        );

    }


    // ------------------------------------
    // PERMANENT CHAPTER 3 COMPLETION
    // ------------------------------------

    const firstCompletion =
        completeChapterOnce(3, 300);


    /*
       IMPORTANT:

       These functions are outside the
       first-completion condition.

       Therefore the map is corrected
       even if the chapter is replayed.
    */

    transformationCompleted = true;


    // Mark Chapter 3 completed
    markChapter3Completed();


    // Unlock Chapter 4
    unlockChapter4();


    // Update progress
    updateStoryProgress();


    console.log(
        "Chapter 3 first completion:",
        firstCompletion
    );


    // ------------------------------------
    // SHOW COMPLETION PANEL
    // ------------------------------------

    setTimeout(
        function() {

            const completePanel =
                document.getElementById(
                    "transformation-complete"
                );


            if (completePanel) {

                completePanel.style.display =
                    "flex";

            }

        },
        900
    );

}


// ---------------------------------------------------------
// MARK CHAPTER 3 COMPLETED
// ---------------------------------------------------------

function markChapter3Completed() {

    /*
       Use ID instead of:
       .map-chapter[data-chapter="3"]

       This matches the structure used
       by your Chapter 1 and Chapter 2.
    */

    const chapter3 =
        document.getElementById(
            "chapter-3"
        );


    if (!chapter3) {

        console.log(
            "Chapter 3 map element not found."
        );

        return;

    }


    chapter3.classList.remove(
        "locked"
    );


    chapter3.classList.add(
        "unlocked"
    );


    chapter3.classList.add(
        "completed"
    );


    const icon =
        chapter3.querySelector(
            ".memory-icon"
        );


    const status =
        chapter3.querySelector(
            ".chapter-status"
        );


    if (icon) {

        icon.textContent =
            "✅";

    }


    if (status) {

        status.textContent =
            "✓ COMPLETED";

    }


    console.log(
        "Chapter 3 marked COMPLETED."
    );

}


// ---------------------------------------------------------
// UNLOCK CHAPTER 4
// ---------------------------------------------------------

function unlockChapter4() {

    const chapter4 =
        document.getElementById(
            "chapter-4"
        );


    if (!chapter4) {

        console.log(
            "Chapter 4 map element not found."
        );

        return;

    }


    chapter4.classList.remove(
        "locked"
    );


    chapter4.classList.add(
        "unlocked"
    );


    const icon =
        chapter4.querySelector(
            ".memory-icon"
        );


    const status =
        chapter4.querySelector(
            ".chapter-status"
        );


    if (icon) {

        icon.textContent =
            "💎";

    }


    if (status) {

        status.textContent =
            "UNLOCKED";

    }


    console.log(
        "Chapter 4 marked UNLOCKED."
    );

}


// ---------------------------------------------------------
// SETUP CHAPTER 3 PUZZLE
// ---------------------------------------------------------

function setupTransformationPieces() {

    const pieces =
        document.querySelectorAll(
            ".seal-piece"
        );


    pieces.forEach(
        function(piece) {

            if (
                piece.dataset.transformationReady ===
                "true"
            ) {

                return;

            }


            piece.dataset.transformationReady =
                "true";


            piece.addEventListener(
                "click",
                function() {

                    const index =
                        Number(
                            piece.dataset.index
                        );


                    rotateTransformationPiece(
                        index
                    );

                }
            );

        }
    );

}


// ---------------------------------------------------------
// CONTINUE AFTER CHAPTER 3
// ---------------------------------------------------------

const continueTransformation =
    document.getElementById(
        "continue-transformation"
    );


if (continueTransformation) {

    continueTransformation.addEventListener(
        "click",
        function() {

            const completePanel =
                document.getElementById(
                    "transformation-complete"
                );


            const chapter3 =
                document.getElementById(
                    "chapter-3-screen"
                );


            const storyMap =
                document.getElementById(
                    "story-map"
                );


            if (completePanel) {

                completePanel.style.display =
                    "none";

            }


            if (chapter3) {

                chapter3.style.display =
                    "none";

            }


            if (storyMap) {

                storyMap.style.display =
                    "block";

            }


            updateStoryProgress();

        }
    );

}


// ---------------------------------------------------------
// BACK TO STORY MAP
// ---------------------------------------------------------

const chapter3Back =
    document.getElementById(
        "chapter-3-back"
    );


if (chapter3Back) {

    chapter3Back.addEventListener(
        "click",
        function() {

            transformationActive = false;


            const chapter3 =
                document.getElementById(
                    "chapter-3-screen"
                );


            const storyMap =
                document.getElementById(
                    "story-map"
                );


            const completePanel =
                document.getElementById(
                    "transformation-complete"
                );


            if (completePanel) {

                completePanel.style.display =
                    "none";

            }


            if (chapter3) {

                chapter3.style.display =
                    "none";

            }


            if (storyMap) {

                storyMap.style.display =
                    "block";

            }


            updateStoryProgress();

        }
    );

}


// ---------------------------------------------------------
// INITIALIZE CHAPTER 3
// ---------------------------------------------------------

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        setupTransformationPieces
    );

}
else {

    setupTransformationPieces();

}


// ========================================
// RESTART WHOLE GAME
// ========================================

function restartWholeGame() {

    const confirmRestart =
        confirm(
            "Are you sure you want to restart the whole story?\n\n" +
            "Your score, completed chapters and memories will be reset."
        );


    if (!confirmRestart) {
        return;
    }


    gameState = {

        chaptersCompleted: 0,

        memoryFragments: [],

        score: 0,

        completedChapters: {

            1: false,
            2: false,
            3: false,
            4: false,
            5: false

        }

    };


    // Reset chapter completion variables
    transformationCompleted = false;


    // Reset Chapter 1
    startChapter1();


    // Reset Chapter 2
    guardianWave = 1;
    guardianScore = 0;
    guardianLives = 3;
    guardianActive = false;


    // Reset Chapter 3
    transformationMoves = 0;
    transformationRotations =
        [0, 0, 0, 0];
    transformationActive = false;


    // Return to main menu
    document
        .getElementById("story-map")
        .style.display = "none";


    document
        .getElementById("chapter-1-screen")
        .style.display = "none";


    document
        .getElementById("chapter-2-screen")
        .style.display = "none";


    document
        .getElementById("chapter-3-screen")
        .style.display = "none";


    const mainMenu =
        document.getElementById(
            "main-menu"
        );


    if (mainMenu) {

        mainMenu.style.display =
            "block";

    }


    updateStoryProgress();


    console.log(
        "WHOLE GAME RESTARTED."
    );

}

// =========================================================
// CHAPTER 4 — THE WISDOM
// =========================================================

let wisdomActive = false;

let wisdomTrial = 1;

let wisdomScore = 0;


let wisdomChangedPosition = 2;

let wisdomMemoryTimer = null;


// =========================================================
// START CHAPTER 4
// =========================================================

function startWisdomChapter() {

    wisdomActive = true;

    wisdomTrial = 1;

    wisdomScore = 0;

    wisdomPlayerSequence = [];


    const completePanel =
        document.getElementById(
            "wisdom-complete"
        );

    if (completePanel) {

        completePanel.style.display =
            "none";

    }


    const message =
        document.getElementById(
            "wisdom-message"
        );

    if (message) {

        message.textContent =
            "Observe carefully. Wisdom begins with attention.";

    }


    showWisdomTrial(1);

    updateWisdomUI();

}


// =========================================================
// UPDATE UI
// =========================================================

function updateWisdomUI() {

    const trial =
        document.getElementById(
            "wisdom-trial"
        );

    const score =
        document.getElementById(
            "wisdom-score"
        );


    if (trial) {

        trial.textContent =
            "TRIAL " +
            wisdomTrial +
            " / 3";

    }


    if (score) {

        score.textContent =
            "SCORE: " +
            wisdomScore;

    }

}


// =========================================================
// SHOW TRIAL
// =========================================================

function showWisdomTrial(number) {

    const trials =
        document.querySelectorAll(
            ".wisdom-trial"
        );


    trials.forEach(
        function(trial) {

            trial.style.display =
                "none";

        }
    );


    const selected =
        document.getElementById(
            "wisdom-trial-" + number
        );


    if (selected) {

        selected.style.display =
            "block";

    }


    wisdomTrial = number;

    updateWisdomUI();


    if (number === 1) {

        startWisdomTrialOne();

    }


    if (number === 2) {

        startWisdomTrialTwo();

    }


    if (number === 3) {

        startWisdomTrialThree();

    }

}


// =========================================================
// CHAPTER 4 — THE WISDOM
// TRIAL 1: THE SACRED PATTERN
// =========================================================

const wisdomSymbols = [
    "🪔",
    "🪷",
    "🌺",
    "🍬"
];

let wisdomSequence = [];
let wisdomPlayerSequence = [];
let wisdomPreviousSequence = [];
let wisdomPatternActive = false;
let wisdomPatternTimer = null;


// ---------------------------------------------------------
// SHUFFLE
// ---------------------------------------------------------

function shuffleWisdomSymbols(array) {

    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        [result[i], result[j]] =
            [result[j], result[i]];
    }

    return result;
}


// ---------------------------------------------------------
// CREATE A NEW DIFFERENT PATTERN
// ---------------------------------------------------------

function createWisdomPattern() {

    let newPattern;

    do {

        newPattern =
            shuffleWisdomSymbols(
                wisdomSymbols
            );

    } while (
        wisdomPreviousSequence.length > 0 &&
        newPattern.join("") ===
        wisdomPreviousSequence.join("")
    );


    wisdomSequence = newPattern;

    wisdomPreviousSequence =
        [...newPattern];

    wisdomPlayerSequence = [];

    console.log(
        "NEW WISDOM PATTERN:",
        wisdomSequence
    );
}


// ---------------------------------------------------------
// START TRIAL
// ---------------------------------------------------------

function startWisdomTrialOne() {
    wisdomPatternActive = true;
    wisdomPlayerSequence = [];

    createWisdomPattern();

    const display = document.getElementById("wisdom-pattern");
    const answerArea = document.getElementById("wisdom-answer-area");
    const message = document.getElementById("wisdom-message");

    if (!display) {
        console.warn("wisdom-pattern element not found.");
        return;
    }

    // Make sure the answer area is visible
    if (answerArea) {
        answerArea.style.display = "block";
        answerArea.style.visibility = "visible";
        answerArea.style.opacity = "1";
    }

    display.textContent = wisdomSequence.join("  ");

    if (message) {
        message.textContent =
            "Observe carefully. Remember the sacred pattern.";
    }

    clearTimeout(wisdomPatternTimer);

    wisdomPatternTimer = setTimeout(function() {

        display.textContent = "✦  ✦  ✦  ✦";

        // Keep the answer buttons visible
        if (answerArea) {
            answerArea.style.display = "block";
            answerArea.style.visibility = "visible";
            answerArea.style.opacity = "1";
        }

        if (message) {
            message.textContent =
                "The pattern is hidden. Recreate what you remember.";
        }

    }, 2200);
}


// ---------------------------------------------------------
// PLAYER CHOOSES SYMBOL
// ---------------------------------------------------------

function handleWisdomSymbol(symbol) {

    if (!wisdomPatternActive) {
        return;
    }


    wisdomPlayerSequence.push(
        symbol
    );


    const currentIndex =
        wisdomPlayerSequence.length - 1;


    // Wrong symbol

    if (
        wisdomPlayerSequence[currentIndex] !==
        wisdomSequence[currentIndex]
    ) {

        const message =
            document.getElementById(
                "wisdom-message"
            );

        if (message) {

            message.textContent =
                "🌿 Not quite. Observe the pattern again.";
        }


        wisdomPlayerSequence = [];


        setTimeout(
            function() {

                startWisdomTrialOne();

            },
            900
        );

        return;
    }


    // Correct but incomplete

    if (
        wisdomPlayerSequence.length <
        wisdomSequence.length
    ) {

        const message =
            document.getElementById(
                "wisdom-message"
            );

        if (message) {

            message.textContent =
                "✨ Correct. Continue remembering...";
        }

        return;
    }


    // -----------------------------------------------------
    // COMPLETE PATTERN
    // -----------------------------------------------------

    wisdomPatternActive = false;


    const message =
        document.getElementById(
            "wisdom-message"
        );

    if (message) {

        message.textContent =
            "✨ Beautifully remembered. Wisdom begins with observation.";
    }


    const pattern =
        document.getElementById(
            "wisdom-pattern"
        );

    if (pattern) {

        pattern.textContent =
            wisdomSequence.join("  ");
    }


    // Move to Trial 2

    setTimeout(function() {
    showWisdomTrial(2);
}, 1200);
}


// =========================================================
// TRIAL 2 — MEMORY
// =========================================================

function startWisdomTrialTwo() {

    const row =
        document.getElementById(
            "wisdom-memory-row"
        );

    const answer =
        document.getElementById(
            "wisdom-memory-answer"
        );


    if (!row) {

        return;

    }


    const buttons =
        row.querySelectorAll(
            "button"
        );


    const original =
        [
            "🪔",
            "🪷",
            "🐭",
            "🍬"
        ];


    buttons.forEach(
        function(button, index) {

            button.textContent =
                original[index];

            button.disabled =
                true;

        }
    );


    if (answer) {

        answer.textContent =
            "Remember the symbols...";

    }


    setTimeout(
        function() {

            const changed =
                row.querySelector(
                    '[data-position="2"]'
                );


            if (changed) {

                changed.textContent =
                    "🌺";

            }


            buttons.forEach(
                function(button) {

                    button.disabled =
                        false;

                }
            );


            if (answer) {

                answer.textContent =
                    "One position changed. Select it.";

            }

        },
        1600
    );

}


// =========================================================
// TRIAL 2 ANSWER
// =========================================================

function handleWisdomMemory(position) {

    if (!wisdomActive) {

        return;

    }


    if (wisdomTrial !== 2) {

        return;

    }


    const answer =
        document.getElementById(
            "wisdom-memory-answer"
        );


    if (
        position ===
        wisdomChangedPosition
    ) {

        wisdomScore += 100;


        if (answer) {

            answer.textContent =
                "✓ MEMORY COMPLETE";

        }


        setTimeout(
            function() {

                showWisdomTrial(3);

            },
            900
        );

    }
    else {

        if (answer) {

            answer.textContent =
                "Look again. Which position changed?";

        }

    }

}


// =========================================================
// TRIAL 3 — UNDERSTANDING
// =========================================================

function startWisdomTrialThree() {

    const answer =
        document.getElementById(
            "wisdom-choice-answer"
        );


    if (answer) {

        answer.textContent =
            "Choose the response that shows patience and understanding.";

    }

}


// =========================================================
// TRIAL 3 ANSWER
// =========================================================

function handleWisdomChoice(correct) {

    if (!wisdomActive) {

        return;

    }


    if (wisdomTrial !== 3) {

        return;

    }


    const answer =
        document.getElementById(
            "wisdom-choice-answer"
        );


    if (correct) {

        wisdomScore += 200;


        if (answer) {

            answer.textContent =
                "✨ Wise choice. Patience brings clarity.";

        }


        wisdomActive = false;


        setTimeout(
            function() {

                completeWisdomChapter();

            },
            1000
        );

    }
    else {

        if (answer) {

            answer.textContent =
                "Wisdom asks us to pause and observe before choosing.";

        }

    }

}


// =========================================================
// COMPLETE CHAPTER 4
// =========================================================

function completeWisdomChapter() {

    const firstCompletion =
        completeChapterOnce(
            4,
            400
        );


    // Chapter 4 is completed.

    const chapter4 =
        document.getElementById(
            "chapter-4"
        );


    if (chapter4) {

        chapter4.classList.remove(
            "locked"
        );

        chapter4.classList.add(
            "unlocked"
        );

        chapter4.classList.add(
            "completed"
        );


        const icon =
            chapter4.querySelector(
                ".memory-icon"
            );


        const status =
            chapter4.querySelector(
                ".chapter-status"
            );


        if (icon) {

            icon.textContent =
                "✅";

        }


        if (status) {

            status.textContent =
                "✓ COMPLETED";

        }

    }


    // Chapter 5 becomes unlocked
    // through updateStoryProgress().

    updateStoryProgress();


    const panel =
        document.getElementById(
            "wisdom-complete"
        );


    if (panel) {

        panel.style.display =
            "flex";

    }


    console.log(
        "Chapter 4 first completion:",
        firstCompletion
    );

}


// =========================================================
// SETUP CHAPTER 4 BUTTONS
// =========================================================

function setupWisdomButtons() {


    const symbolButtons =
        document.querySelectorAll(
            ".wisdom-symbol-button"
        );


    symbolButtons.forEach(
        function(button) {

            if (
                button.dataset.wisdomReady ===
                "true"
            ) {

                return;

            }


            button.dataset.wisdomReady =
                "true";


            button.addEventListener(
                "click",
                function() {

                    handleWisdomSymbol(
                        button.dataset.wisdomSymbol
                    );

                }
            );

        }
    );


    const memoryButtons =
        document.querySelectorAll(
            "#wisdom-memory-row button"
        );


    memoryButtons.forEach(
        function(button) {

            if (
                button.dataset.wisdomReady ===
                "true"
            ) {

                return;

            }


            button.dataset.wisdomReady =
                "true";


            button.addEventListener(
                "click",
                function() {

                    handleWisdomMemory(
                        Number(
                            button.dataset.position
                        )
                    );

                }
            );

        }
    );


    const choices =
        document.querySelectorAll(
            ".wisdom-choice"
        );


    choices.forEach(
        function(button) {

            if (
                button.dataset.wisdomReady ===
                "true"
            ) {

                return;

            }


            button.dataset.wisdomReady =
                "true";


            button.addEventListener(
                "click",
                function() {

                    handleWisdomChoice(
                        button.dataset.correct ===
                        "true"
                    );

                }
            );

        }
    );

}


// =========================================================
// CONTINUE AFTER CHAPTER 4
// =========================================================

const continueWisdom =
    document.getElementById(
        "continue-wisdom"
    );


if (continueWisdom) {

    continueWisdom.addEventListener(
        "click",
        function() {

            const panel =
                document.getElementById(
                    "wisdom-complete"
                );


            const chapter4 =
                document.getElementById(
                    "chapter-4-screen"
                );


            const storyMap =
                document.getElementById(
                    "story-map"
                );


            if (panel) {

                panel.style.display =
                    "none";

            }


            if (chapter4) {

                chapter4.style.display =
                    "none";

            }


            if (storyMap) {

                storyMap.style.display =
                    "block";

            }


            updateStoryProgress();

        }
    );

}


// =========================================================
// CHAPTER 4 BACK BUTTON
// =========================================================

const chapter4Back =
    document.getElementById(
        "chapter-4-back"
    );


if (chapter4Back) {

    chapter4Back.addEventListener(
        "click",
        function() {

            wisdomActive = false;

            clearTimeout(
                wisdomMemoryTimer
            );


            const chapter4 =
                document.getElementById(
                    "chapter-4-screen"
                );


            const storyMap =
                document.getElementById(
                    "story-map"
                );


            const panel =
                document.getElementById(
                    "wisdom-complete"
                );


            if (panel) {

                panel.style.display =
                    "none";

            }


            if (chapter4) {

                chapter4.style.display =
                    "none";

            }


            if (storyMap) {

                storyMap.style.display =
                    "block";

            }


            updateStoryProgress();

        }
    );

}


// =========================================================
// INITIALIZE CHAPTER 4
// =========================================================

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        setupWisdomButtons
    );

}
else {

    setupWisdomButtons();

}

// ========================================
// CHAPTER 5 — MUSHAK'S JOURNEY
// ========================================

let mushakJourneyActive = false;
let mushakIntroStep = 0;


// ----------------------------------------
// START MUSHAK'S JOURNEY
// ----------------------------------------

function startMushakJourney() {

    mushakJourneyActive = true;
    mushakIntroStep = 0;

    const introText =
        document.getElementById("mushak-intro-text");

    const introMessage =
        document.getElementById("mushak-intro-message");

    const beginButton =
        document.getElementById("mushak-begin-button");

    const completePanel =
        document.getElementById("mushak-complete");

    if (completePanel) {
        completePanel.style.display = "none";
    }

    if (introText) {
        introText.textContent = "...";
    }

    if (introMessage) {
        introMessage.textContent =
            "The journey is not over.";
    }

    if (beginButton) {
        beginButton.style.display = "inline-block";
        beginButton.textContent =
            "BEGIN MUSHAK'S JOURNEY";
    }

    console.log("🐭 MUSHAK'S JOURNEY STARTED");
}


// ----------------------------------------
// BEGIN BUTTON
// ----------------------------------------

const mushakBeginButton =
    document.getElementById("mushak-begin-button");

if (mushakBeginButton) {

    mushakBeginButton.addEventListener(
        "click",
        function () {

            mushakIntroStep++;

            const introText =
                document.getElementById("mushak-intro-text");

            const introMessage =
                document.getElementById("mushak-intro-message");

            const button =
                document.getElementById("mushak-begin-button");


            if (mushakIntroStep === 1) {

                if (introText) {
                    introText.textContent = "🐭";
                }

                if (introMessage) {
                    introMessage.textContent =
                        "You have followed Ganesha's path...";
                }

                if (button) {
                    button.textContent = "CONTINUE";
                }

                return;
            }


            if (mushakIntroStep === 2) {

                if (introMessage) {
                    introMessage.textContent =
                        "But you never asked who was carrying the memories.";
                }

                if (button) {
                    button.textContent = "CONTINUE";
                }

                return;
            }


            if (mushakIntroStep === 3) {

                if (introMessage) {
                    introMessage.textContent =
                        "The smallest companion has been watching.";
                }

                if (button) {
                    button.textContent = "CONTINUE";
                }

                return;
            }


            if (mushakIntroStep === 4) {

                if (introMessage) {
                    introMessage.textContent =
                        "Now... Mushak must continue alone.";
                }

                if (button) {
                    button.textContent =
                        "ENTER THE UNKNOWN";
                }

                return;
            }


            if (mushakIntroStep >= 5) {

                beginMushakAdventure();

            }

        }
    );

}


// ========================================
// ENTER THE FORGOTTEN PATH
// ========================================

function beginMushakAdventure() {

    const introLayout =
        document.querySelector(
            ".mushak-journey-layout"
        );

    const storyLine =
        document.getElementById(
            "mushak-intro-message"
        );

    const actionArea =
        document.querySelector(
            ".mushak-action-area"
        );

    const exploration =
        document.getElementById(
            "mushak-exploration"
        );


    if (introLayout) {
        introLayout.style.display = "none";
    }


    if (storyLine) {
        storyLine.style.display = "none";
    }


    if (actionArea) {
        actionArea.style.display = "none";
    }


    if (exploration) {
        exploration.style.display = "block";
    }


    mushakExplorerStart();

}

// =========================================================
// CHAPTER 5 — THE FORGOTTEN PATH
// MUSHAK EXPLORATION SYSTEM
// =========================================================


let mushakExplorerActive = false;

let mushakExplorerX = 50;
let mushakExplorerY = 82;

let mushakExplorerSpeed = 0.55;

let mushakKeys = {};

let mushakCollectedMemories = 0;

let mushakMemoryPositions = [];

let mushakMobileDirection = null;

let mushakExplorerLoopStarted = false;


// =========================================================
// START EXPLORATION
// =========================================================

function mushakExplorerStart() {

    mushakExplorerActive = true;

    mushakExplorerX = 50;

    mushakExplorerY = 82;

    mushakCollectedMemories = 0;

    mushakMobileDirection = null;


    const player =
        document.getElementById(
            "mushak-player"
        );

    const message =
        document.getElementById(
            "mushak-exploration-message"
        );


    if (message) {

        message.textContent =
            "Something is waiting in the darkness... Find the three lost memories.";

    }


    if (player) {

        player.classList.remove(
            "moving"
        );

    }


    mushakPlaceMemories();

    mushakUpdateExplorerUI();


    if (!mushakExplorerLoopStarted) {

        mushakExplorerLoopStarted = true;

        requestAnimationFrame(
            mushakExplorerLoop
        );

    }


    console.log(
        "🐭 THE FORGOTTEN PATH BEGINS"
    );

}


// =========================================================
// RANDOM MEMORY POSITIONS
// =========================================================

function mushakPlaceMemories() {

    const memories =
        document.querySelectorAll(
            ".mushak-memory"
        );


    const positions = [];


    for (let i = 0; i < 3; i++) {

        let x;
        let y;

        let valid = false;


        while (!valid) {

            x =
                12 +
                Math.random() * 76;

            y =
                22 +
                Math.random() * 55;


            valid = true;


            for (const position of positions) {

                const dx =
                    x - position.x;

                const dy =
                    y - position.y;

                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );


                if (distance < 18) {

                    valid = false;

                    break;

                }

            }


            // Keep memories away from shrine

            const shrineDistance =
                Math.sqrt(
                    Math.pow(x - 50, 2) +
                    Math.pow(y - 25, 2)
                );


            if (shrineDistance < 18) {

                valid = false;

            }

        }


        positions.push({
            x: x,
            y: y
        });


        if (memories[i]) {

            memories[i].style.left =
                x + "%";

            memories[i].style.top =
                y + "%";

            memories[i].classList.remove(
                "collected"
            );

            memories[i].dataset.collected =
                "false";

        }

    }


    mushakMemoryPositions =
        positions;

}


// =========================================================
// UPDATE PLAYER POSITION
// =========================================================

function mushakUpdateExplorer() {

    if (!mushakExplorerActive) {
        return;
    }


    let dx = 0;
    let dy = 0;


    if (
        mushakKeys["ArrowUp"] ||
        mushakKeys["w"] ||
        mushakKeys["W"] ||
        mushakMobileDirection === "up"
    ) {

        dy -= mushakExplorerSpeed;

    }


    if (
        mushakKeys["ArrowDown"] ||
        mushakKeys["s"] ||
        mushakKeys["S"] ||
        mushakMobileDirection === "down"
    ) {

        dy += mushakExplorerSpeed;

    }


    if (
        mushakKeys["ArrowLeft"] ||
        mushakKeys["a"] ||
        mushakKeys["A"] ||
        mushakMobileDirection === "left"
    ) {

        dx -= mushakExplorerSpeed;

    }


    if (
        mushakKeys["ArrowRight"] ||
        mushakKeys["d"] ||
        mushakKeys["D"] ||
        mushakMobileDirection === "right"
    ) {

        dx += mushakExplorerSpeed;

    }


    if (dx !== 0 || dy !== 0) {

        const length =
            Math.sqrt(
                dx * dx +
                dy * dy
            );


        dx =
            (dx / length) *
            mushakExplorerSpeed;

        dy =
            (dy / length) *
            mushakExplorerSpeed;


        mushakExplorerX += dx;

        mushakExplorerY += dy;


        mushakExplorerX =
            Math.max(
                7,
                Math.min(
                    93,
                    mushakExplorerX
                )
            );


        mushakExplorerY =
            Math.max(
                12,
                Math.min(
                    88,
                    mushakExplorerY
                )
            );


        const player =
            document.getElementById(
                "mushak-player"
            );


        if (player) {

            player.classList.add(
                "moving"
            );

        }


        mushakCheckMemoryCollection();

    }
    else {

        const player =
            document.getElementById(
                "mushak-player"
            );


        if (player) {

            player.classList.remove(
                "moving"
            );

        }

    }


    const player =
        document.getElementById(
            "mushak-player"
        );


    if (player) {

        player.style.left =
            mushakExplorerX + "%";

        player.style.top =
            mushakExplorerY + "%";

    }

}


// =========================================================
// CHECK MEMORY COLLECTION
// =========================================================

function mushakCheckMemoryCollection() {

    const memories =
        document.querySelectorAll(
            ".mushak-memory"
        );


    memories.forEach(
        function(memory, index) {

            if (
                memory.dataset.collected ===
                "true"
            ) {

                return;

            }


            const rect =
                memory.getBoundingClientRect();


            const world =
                document.getElementById(
                    "mushak-world"
                );


            if (!world) {
                return;
            }


            const worldRect =
                world.getBoundingClientRect();


            const memoryX =
                (
                    rect.left +
                    rect.width / 2 -
                    worldRect.left
                ) /
                worldRect.width *
                100;


            const memoryY =
                (
                    rect.top +
                    rect.height / 2 -
                    worldRect.top
                ) /
                worldRect.height *
                100;


            const dx =
                mushakExplorerX -
                memoryX;

            const dy =
                mushakExplorerY -
                memoryY;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 6) {

                mushakCollectMemory(
                    memory,
                    index
                );

            }

        }
    );

}


// =========================================================
// COLLECT MEMORY
// =========================================================

function mushakCollectMemory(
    memory,
    index
) {

    memory.dataset.collected =
        "true";

    memory.classList.add(
        "collected"
    );


    mushakCollectedMemories++;


    mushakUpdateExplorerUI();


    const message =
        document.getElementById(
            "mushak-exploration-message"
        );


    if (
        mushakCollectedMemories === 1
    ) {

        if (message) {

            message.textContent =
                "✨ This feels familiar...";

        }

    }


    if (
        mushakCollectedMemories === 2
    ) {

        if (message) {

            message.textContent =
                "🌿 Why do I remember this place?";

        }

    }


    if (
        mushakCollectedMemories === 3
    ) {

        if (message) {

            message.textContent =
                "💎 These memories... they're connected to Mushak.";

        }


        setTimeout(
            // =========================================================
// THE FORGOTTEN PATH → THE CHASE
// =========================================================

function mushakExplorerReveal() {

    if (!mushakExplorerActive) {
        return;
    }


    mushakExplorerActive = false;


    const message =
        document.getElementById(
            "mushak-exploration-message"
        );


    if (message) {

        message.textContent =
            "👁️ Something has noticed you.";

    }


    const world =
        document.getElementById(
            "mushak-world"
        );


    if (world) {

        world.classList.add(
            "mushak-world-danger"
        );

    }


    // -----------------------------------------
    // FIRST WARNING
    // -----------------------------------------

    setTimeout(
        function() {

            if (message) {

                message.textContent =
                    "YOU ARE NOT ALONE.";

            }

        },
        1200
    );


    // -----------------------------------------
    // SECOND WARNING
    // -----------------------------------------

    setTimeout(
        function() {

            if (message) {

                message.textContent =
                    "RUN, MUSHAK.";

            }

        },
        2300
    );


    // -----------------------------------------
    // ENTER CHASE
    // -----------------------------------------

    setTimeout(
        function() {

            mushakStartChase();

        },
        3200
    );

}
        );

    }


    console.log(
        "🐭 Memory collected:",
        index + 1
    );

}


// =========================================================
// UPDATE COUNTER
// =========================================================

function mushakUpdateExplorerUI() {

    const counter =
        document.getElementById(
            "mushak-memory-counter"
        );


    if (counter) {

        counter.textContent =
            "MEMORY FRAGMENTS: " +
            mushakCollectedMemories +
            " / 3";

    }

}


// =========================================================
// REVELATION AFTER 3 MEMORIES
// =========================================================

function mushakExplorerReveal() {

    if (!mushakExplorerActive) {
        return;
    }


    mushakExplorerActive = false;


    const message =
        document.getElementById(
            "mushak-exploration-message"
        );


    if (message) {

        message.textContent =
            "👁️ Something has noticed you.";

    }


    const world =
        document.getElementById(
            "mushak-world"
        );


    if (world) {

        world.classList.add(
            "mushak-world-danger"
        );

    }


    setTimeout(
        function() {

            if (message) {

                message.textContent =
                    "YOU ARE NOT ALONE.";

            }

        },
        1300
    );


    setTimeout(
        function() {

            if (message) {

                message.textContent =
                    "The path ahead is no longer silent...";

            }

            console.log(
                "🐭 FORGOTTEN PATH COMPLETE"
            );

        },
        2700
    );

}


// =========================================================
// KEYBOARD
// =========================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (!mushakExplorerActive) {
            return;
        }


        mushakKeys[event.key] = true;


        if (
            [
                "ArrowUp",
                "ArrowDown",
                "ArrowLeft",
                "ArrowRight"
            ].includes(event.key)
        ) {

            event.preventDefault();

        }

    }
);


document.addEventListener(
    "keyup",
    function(event) {

        mushakKeys[event.key] = false;

    }
);


// =========================================================
// MOBILE CONTROLS
// =========================================================

const mushakMoveButtons =
    document.querySelectorAll(
        ".mushak-move-button"
    );


mushakMoveButtons.forEach(
    function(button) {

        const direction =
            button.dataset.mushakDirection;


        button.addEventListener(
            "pointerdown",
            function(event) {

                event.preventDefault();

                mushakMobileDirection =
                    direction;

            }
        );


        button.addEventListener(
            "pointerup",
            function() {

                mushakMobileDirection =
                    null;

            }
        );


        button.addEventListener(
            "pointercancel",
            function() {

                mushakMobileDirection =
                    null;

            }
        );


        button.addEventListener(
            "pointerleave",
            function() {

                mushakMobileDirection =
                    null;

            }
        );

    }
);


// =========================================================
// EXPLORATION LOOP
// =========================================================

function mushakExplorerLoop() {

    mushakUpdateExplorer();

    requestAnimationFrame(
        mushakExplorerLoop
    );

}

// =========================================================
// CHAPTER 5 — THE CHASE
// =========================================================


let mushakChaseActive = false;

let mushakChaseX = 18;

let mushakChaseY = 50;

let mushakShadowX = 5;

let mushakShadowY = 50;

let mushakChaseScore = 0;

let mushakChaseLives = 3;

let mushakChaseKeys = {};

let mushakChaseMobileDirection = null;

let mushakChaseLoopStarted = false;

let mushakChaseInvulnerable = false;

let mushakChaseStartTime = 0;


// =========================================================
// START CHASE
// =========================================================

function mushakStartChase() {

    const exploration =
        document.getElementById(
            "mushak-exploration"
        );

    const chase =
        document.getElementById(
            "mushak-chase"
        );


    if (exploration) {

        exploration.style.display =
            "none";

    }


    if (chase) {

        chase.style.display =
            "block";

    }


    mushakChaseActive = true;

    mushakChaseX = 18;

    mushakChaseY = 50;

    mushakShadowX = 5;

    mushakShadowY = 50;

    mushakChaseScore = 0;

    mushakChaseLives = 3;

    mushakChaseInvulnerable = false;

    mushakChaseMobileDirection = null;

    mushakChaseStartTime =
        Date.now();


    mushakResetChaseWorld();

    mushakUpdateChaseUI();


    const message =
        document.getElementById(
            "mushak-chase-message"
        );


    if (message) {

        message.textContent =
            "⚡ RUN, MUSHAK. IT IS COMING.";

    }


    const shadow =
        document.getElementById(
            "mushak-shadow"
        );


    if (shadow) {

        shadow.classList.remove(
            "near"
        );

        setTimeout(
            function() {

                shadow.classList.add(
                    "visible"
                );

            },
            500
        );

    }


    if (!mushakChaseLoopStarted) {

        mushakChaseLoopStarted = true;

        requestAnimationFrame(
            mushakChaseLoop
        );

    }


    console.log(
        "⚡ THE CHASE HAS BEGUN"
    );

}


// =========================================================
// RESET CHASE WORLD
// =========================================================

function mushakResetChaseWorld() {

    const player =
        document.getElementById(
            "mushak-chase-player"
        );


    if (player) {

        player.style.left =
            mushakChaseX + "%";

        player.style.top =
            mushakChaseY + "%";

    }


    const shadow =
        document.getElementById(
            "mushak-shadow"
        );


    if (shadow) {

        shadow.style.left =
            mushakShadowX + "%";

        shadow.style.top =
            mushakShadowY + "%";

    }


    // -----------------------------------------
    // ENERGY POSITIONS
    // -----------------------------------------

    const energy =
        document.querySelectorAll(
            ".chase-energy"
        );


    const energyPositions = [
        { x: 38, y: 25 },
        { x: 55, y: 70 },
        { x: 68, y: 35 },
        { x: 78, y: 75 }
    ];


    energy.forEach(
        function(item, index) {

            const position =
                energyPositions[index];


            item.style.left =
                position.x + "%";

            item.style.top =
                position.y + "%";

            item.classList.remove(
                "collected"
            );

            item.dataset.collected =
                "false";

        }
    );


    // -----------------------------------------
    // OBSTACLE POSITIONS
    // -----------------------------------------

    const obstacles =
        document.querySelectorAll(
            ".chase-obstacle"
        );


    const obstaclePositions = [
        { x: 45, y: 48 },
        { x: 62, y: 25 },
        { x: 73, y: 62 }
    ];


    obstacles.forEach(
        function(item, index) {

            const position =
                obstaclePositions[index];


            item.style.left =
                position.x + "%";

            item.style.top =
                position.y + "%";

        }
    );

}


// =========================================================
// CHASE MOVEMENT
// =========================================================

function mushakUpdateChase() {

    if (!mushakChaseActive) {
        return;
    }


    let dx = 0;

    let dy = 0;


    if (
        mushakChaseKeys["ArrowUp"] ||
        mushakChaseKeys["w"] ||
        mushakChaseKeys["W"] ||
        mushakChaseMobileDirection === "up"
    ) {

        dy -= 0.8;

    }


    if (
        mushakChaseKeys["ArrowDown"] ||
        mushakChaseKeys["s"] ||
        mushakChaseKeys["S"] ||
        mushakChaseMobileDirection === "down"
    ) {

        dy += 0.8;

    }


    if (
        mushakChaseKeys["ArrowLeft"] ||
        mushakChaseKeys["a"] ||
        mushakChaseKeys["A"] ||
        mushakChaseMobileDirection === "left"
    ) {

        dx -= 0.8;

    }


    if (
        mushakChaseKeys["ArrowRight"] ||
        mushakChaseKeys["d"] ||
        mushakChaseKeys["D"] ||
        mushakChaseMobileDirection === "right"
    ) {

        dx += 0.8;

    }


    if (dx !== 0 || dy !== 0) {

        const length =
            Math.sqrt(
                dx * dx +
                dy * dy
            );


        dx /= length;

        dy /= length;


        mushakChaseX +=
            dx * 0.75;

        mushakChaseY +=
            dy * 0.75;


        mushakChaseX =
            Math.max(
                7,
                Math.min(
                    88,
                    mushakChaseX
                )
            );


        mushakChaseY =
            Math.max(
                10,
                Math.min(
                    90,
                    mushakChaseY
                )
            );


        mushakCheckChaseEnergy();

        mushakCheckChaseObstacles();

        mushakCheckChaseFinish();
    }


    const player =
        document.getElementById(
            "mushak-chase-player"
        );


    if (player) {

        player.style.left =
            mushakChaseX + "%";

        player.style.top =
            mushakChaseY + "%";

    }

}


// =========================================================
// SHADOW MOVEMENT
// =========================================================

function mushakUpdateShadow() {

    if (!mushakChaseActive) {
        return;
    }


    const dx =
        mushakChaseX -
        mushakShadowX;

    const dy =
        mushakChaseY -
        mushakShadowY;


    const distance =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    // The shadow slowly gets closer.

    const shadowSpeed =
        distance > 28
            ? 0.13
            : 0.19;


    if (distance > 0.1) {

        mushakShadowX +=
            (dx / distance) *
            shadowSpeed;

        mushakShadowY +=
            (dy / distance) *
            shadowSpeed;

    }


    const shadow =
        document.getElementById(
            "mushak-shadow"
        );


    if (shadow) {

        shadow.style.left =
            mushakShadowX + "%";

        shadow.style.top =
            mushakShadowY + "%";


        if (distance < 15) {

            shadow.classList.add(
                "near"
            );

        }
        else {

            shadow.classList.remove(
                "near"
            );

        }

    }


    if (
        distance < 7 &&
        !mushakChaseInvulnerable
    ) {

        mushakChaseHit();

    }

}


// =========================================================
// COLLECT ENERGY
// =========================================================

function mushakCheckChaseEnergy() {

    const energy =
        document.querySelectorAll(
            ".chase-energy"
        );


    energy.forEach(
        function(item) {

            if (
                item.dataset.collected ===
                "true"
            ) {

                return;

            }


            const rect =
                item.getBoundingClientRect();


            const world =
                document.getElementById(
                    "mushak-chase-world"
                );


            if (!world) {
                return;
            }


            const worldRect =
                world.getBoundingClientRect();


            const x =
                (
                    rect.left +
                    rect.width / 2 -
                    worldRect.left
                ) /
                worldRect.width *
                100;


            const y =
                (
                    rect.top +
                    rect.height / 2 -
                    worldRect.top
                ) /
                worldRect.height *
                100;


            const dx =
                mushakChaseX - x;

            const dy =
                mushakChaseY - y;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 6) {

                item.dataset.collected =
                    "true";

                item.classList.add(
                    "collected"
                );


                mushakChaseScore += 100;

                mushakUpdateChaseUI();


                const message =
                    document.getElementById(
                        "mushak-chase-message"
                    );


                if (message) {

                    message.textContent =
                        "✦ Memory energy recovered. Keep running!";

                }

            }

        }
    );

}


// =========================================================
// OBSTACLE COLLISION
// =========================================================

function mushakCheckChaseObstacles() {

    const obstacles =
        document.querySelectorAll(
            ".chase-obstacle"
        );


    obstacles.forEach(
        function(obstacle) {

            const rect =
                obstacle.getBoundingClientRect();


            const world =
                document.getElementById(
                    "mushak-chase-world"
                );


            if (!world) {
                return;
            }


            const worldRect =
                world.getBoundingClientRect();


            const x =
                (
                    rect.left +
                    rect.width / 2 -
                    worldRect.left
                ) /
                worldRect.width *
                100;


            const y =
                (
                    rect.top +
                    rect.height / 2 -
                    worldRect.top
                ) /
                worldRect.height *
                100;


            const dx =
                mushakChaseX - x;

            const dy =
                mushakChaseY - y;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance < 6 &&
                !mushakChaseInvulnerable
            ) {

                mushakChaseHit();

            }

        }
    );

}


// =========================================================
// HIT
// =========================================================

function mushakChaseHit() {

    mushakChaseInvulnerable = true;

    mushakChaseLives--;


    mushakUpdateChaseUI();


    const player =
        document.getElementById(
            "mushak-chase-player"
        );


    if (player) {

        player.classList.add(
            "hurt"
        );


        setTimeout(
            function() {

                player.classList.remove(
                    "hurt"
                );

            },
            350
        );

    }


    const message =
        document.getElementById(
            "mushak-chase-message"
        );


    if (message) {

        message.textContent =
            "⚠️ KEEP MOVING!";

    }


    if (mushakChaseLives <= 0) {

        mushakChaseActive = false;


        setTimeout(
            function() {

                if (message) {

                    message.textContent =
                        "THE SHADOW FOUND YOU.";

                }


                setTimeout(
                    function() {

                        mushakStartChase();

                    },
                    1200
                );

            },
            400
        );


        return;

    }


    // Give the player a short grace period.

    setTimeout(
        function() {

            mushakChaseInvulnerable =
                false;

        },
        1200
    );

}


// =========================================================
// UPDATE CHASE UI
// =========================================================

function mushakUpdateChaseUI() {

    const score =
        document.getElementById(
            "mushak-chase-score"
        );


    const lives =
        document.getElementById(
            "mushak-chase-lives"
        );


    if (score) {

        score.textContent =
            "SCORE: " +
            mushakChaseScore;

    }


    if (lives) {

        let hearts = "";


        for (
            let i = 0;
            i < mushakChaseLives;
            i++
        ) {

            hearts += "❤️ ";

        }


        lives.textContent =
            hearts ||
            "💔";

    }

}


// =========================================================
// KEYBOARD
// =========================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (!mushakChaseActive) {
            return;
        }


        mushakChaseKeys[event.key] =
            true;


        if (
            [
                "ArrowUp",
                "ArrowDown",
                "ArrowLeft",
                "ArrowRight"
            ].includes(event.key)
        ) {

            event.preventDefault();

        }

    }
);


document.addEventListener(
    "keyup",
    function(event) {

        mushakChaseKeys[event.key] =
            false;

    }
);


// =========================================================
// MOBILE CHASE CONTROLS
// =========================================================

const mushakChaseMoveButtons =
    document.querySelectorAll(
        ".mushak-chase-move"
    );


mushakChaseMoveButtons.forEach(
    function(button) {

        const direction =
            button.dataset.chaseDirection;


        button.addEventListener(
            "pointerdown",
            function(event) {

                event.preventDefault();

                mushakChaseMobileDirection =
                    direction;

            }
        );


        button.addEventListener(
            "pointerup",
            function() {

                mushakChaseMobileDirection =
                    null;

            }
        );


        button.addEventListener(
            "pointercancel",
            function() {

                mushakChaseMobileDirection =
                    null;

            }
        );


        button.addEventListener(
            "pointerleave",
            function() {

                mushakChaseMobileDirection =
                    null;

            }
        );

    }
);
// =========================================================
// CHASE FINISH — SHRINE COLLISION
// =========================================================

function mushakCheckChaseFinish() {

    if (!mushakChaseActive) {
        return;
    }


    const player =
        document.getElementById(
            "mushak-chase-player"
        );


    const finish =
        document.querySelector(
            ".mushak-chase-finish"
        );


    if (!player || !finish) {
        return;
    }


    const playerRect =
        player.getBoundingClientRect();


    const finishRect =
        finish.getBoundingClientRect();


    const playerCenterX =
        playerRect.left +
        playerRect.width / 2;


    const playerCenterY =
        playerRect.top +
        playerRect.height / 2;


    const finishCenterX =
        finishRect.left +
        finishRect.width / 2;


    const finishCenterY =
        finishRect.top +
        finishRect.height / 2;


    const distanceX =
        playerCenterX -
        finishCenterX;


    const distanceY =
        playerCenterY -
        finishCenterY;


    const distance =
        Math.sqrt(
            distanceX * distanceX +
            distanceY * distanceY
        );


    /*
       Mushak is considered to have
       reached the shrine when he is
       close enough to its center.
    */

    if (distance < 100) {

        mushakFinishChase();

    }

}
// =========================================================
// CHAPTER 5.3 — ENTER THE THREE DOORS
// =========================================================

let mushakChosenDoor = null;


function mushakEnterThreeDoors() {

    const chase =
        document.getElementById(
            "mushak-chase"
        );

    const doors =
        document.getElementById(
            "mushak-three-doors"
        );


    if (chase) {

        chase.style.display =
            "none";

    }


    if (doors) {

        doors.style.display =
            "block";

    }


    mushakChosenDoor = null;


    const reveal =
        document.getElementById(
            "three-doors-reveal"
        );


    if (reveal) {

        reveal.style.display =
            "none";

    }


    const message =
        document.getElementById(
            "three-doors-message"
        );


    if (message) {

        message.textContent =
            "Three paths stand before you. Only one can be chosen.";

    }


    document
        .querySelectorAll(".memory-door")
        .forEach(
            function(door) {

                door.classList.remove(
                    "selected"
                );

                door.classList.remove(
                    "disabled"
                );

            }
        );


    console.log(
        "🚪 THE THREE DOORS BEGUN"
    );

}

// =========================================================
// THREE DOOR CHOICES
// =========================================================

const mushakMemoryDoors =
    document.querySelectorAll(
        ".memory-door"
    );


mushakMemoryDoors.forEach(
    function(door) {

        door.addEventListener(
            "click",
            function() {

                if (
                    mushakChosenDoor !== null
                ) {

                    return;

                }


                const chosen =
                    door.dataset.door;


                mushakChosenDoor =
                    chosen;


                mushakSelectDoor(
                    chosen,
                    door
                );

            }
        );

    }
);

// =========================================================
// PROCESS DOOR CHOICE
// =========================================================

function mushakSelectDoor(
    chosen,
    selectedDoor
) {

    document
        .querySelectorAll(".memory-door")
        .forEach(
            function(door) {

                if (
                    door !== selectedDoor
                ) {

                    door.classList.add(
                        "disabled"
                    );

                }

            }
        );


    selectedDoor.classList.add(
        "selected"
    );


    const message =
        document.getElementById(
            "three-doors-message"
        );


    const reveal =
        document.getElementById(
            "three-doors-reveal"
        );


    const symbol =
        document.getElementById(
            "three-doors-reveal-symbol"
        );


    const title =
        document.getElementById(
            "three-doors-reveal-title"
        );


    const text =
        document.getElementById(
            "three-doors-reveal-text"
        );


    if (reveal) {

        reveal.style.display =
            "block";

    }


    // -----------------------------------------
    // MEMORY
    // -----------------------------------------

    if (chosen === "memory") {

        if (message) {

            message.textContent =
                "The door remembers you.";

        }


        if (symbol) {

            symbol.textContent =
                "🪔";

        }


        if (title) {

            title.textContent =
                "THE MEMORY REMEMBERS";

        }


        if (text) {

            text.textContent =
                "For a moment, Mushak sees a place " +
                "he has never visited... yet somehow " +
                "he remembers it.";

        }

    }


    // -----------------------------------------
    // COURAGE
    // -----------------------------------------

    if (chosen === "courage") {

        if (message) {

            message.textContent =
                "The darkness does not disappear.";

        }


        if (symbol) {

            symbol.textContent =
                "🔥";

        }


        if (title) {

            title.textContent =
                "THE SHADOW SPEAKS";

        }


        if (text) {

            text.textContent =
                "The shadow approaches without attacking. " +
                "It whispers a name Mushak has never heard... " +
                "but somehow knows.";

        }

    }


    // -----------------------------------------
    // WISDOM
    // -----------------------------------------

    if (chosen === "wisdom") {

        if (message) {

            message.textContent =
                "The silence becomes an answer.";

        }


        if (symbol) {

            symbol.textContent =
                "🪷";

        }


        if (title) {

            title.textContent =
                "THE ANSWER WAS WAITING";

        }


        if (text) {

            text.textContent =
                "Mushak sees the journey differently. " +
                "The memories were never leading him " +
                "somewhere. They were leading him inward.";

        }

    }


    console.log(
        "🐭 MUSHak CHOSE:",
        chosen
    );

}

// =========================================================
// ENTER SELECTED MEMORY
// =========================================================

const threeDoorsContinue =
    document.getElementById(
        "three-doors-continue"
    );


if (threeDoorsContinue) {

    threeDoorsContinue.addEventListener(
        "click",
        function() {

            if (
                mushakChosenDoor === null
            ) {

                return;

            }



            console.log(
                "ENTERING MEMORY:",
                mushakChosenDoor
            );


            const doors =
                document.getElementById(
                    "mushak-three-doors"
                );


            if (doors) {

                doors.style.display =
                    "none";

            }


            // =================================================
            // MEMORY PATH
            // =================================================

            if (
                mushakChosenDoor === "memory"
            ) {

                const memoryPath =
                    document.getElementById(
                        "mushak-memory-path"
                    );


                if (memoryPath) {

                    memoryPath.style.display =
                        "block";


                    memoryPath.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });


                    startMushakMemoryPath();

                }
                else {

                    console.error(
                        "❌ mushak-memory-path NOT FOUND"
                    );

                }

                return;

            }


            // =================================================
            // COURAGE PATH
            // =================================================

            if (
                mushakChosenDoor === "courage"
            ) {

                const shadowMemory =
                    document.getElementById(
                        "mushak-shadow-memory"
                    );


                if (shadowMemory) {

                    shadowMemory.style.display =
                        "block";


                    shadowMemory.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }


                startShadowMemory();

                return;

            }


            // =================================================
            // WISDOM PATH
            // =================================================

            if (
                mushakChosenDoor === "wisdom"
            ) {

                const wisdomPath =
                    document.getElementById(
                        "mushak-wisdom-path"
                    );


                if (wisdomPath) {

                    wisdomPath.style.display =
                        "block";


                    wisdomPath.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });


                    startMushakWisdomPath();

                }
                else {

                    console.error(
                        "❌ mushak-wisdom-path NOT FOUND"
                    );

                }

                return;

            }

        }
    );

}

// =========================================================
// SHADOW MEMORY GAME
// =========================================================

let shadowMemoryCorrectChoice = 1;

let shadowMemoryCompleted = false;


function startShadowMemory() {

    shadowMemoryCompleted = false;


    const result =
        document.getElementById(
            "shadow-memory-result"
        );


    if (result) {

        result.style.display =
            "none";

    }


    const message =
        document.getElementById(
            "shadow-memory-message"
        );


    if (message) {

        message.textContent =
            "The shadow is showing you three memories...";

    }


    document
        .querySelectorAll(
            ".shadow-memory-card"
        )
        .forEach(
            function(card) {

                card.classList.remove(
                    "correct"
                );

                card.classList.remove(
                    "wrong"
                );

                card.disabled = false;

            }
        );


    /*
       The TEMPLE is the real memory.

       We will later make this dynamic
       and connect it to earlier chapters.
    */

    shadowMemoryCorrectChoice = 1;


    console.log(
        "🔥 SHADOW MEMORY STARTED"
    );

}

// =========================================================
// SHADOW MEMORY CHOICE
// =========================================================

const shadowMemoryCards =
    document.querySelectorAll(
        ".shadow-memory-card"
    );


shadowMemoryCards.forEach(
    function(card) {

        card.addEventListener(
            "click",
            function() {

                if (
                    shadowMemoryCompleted
                ) {

                    return;

                }


                const choice =
                    Number(
                        card.dataset.shadowChoice
                    );


                if (
                    choice ===
                    shadowMemoryCorrectChoice
                ) {

                    shadowMemoryCorrect();

                }
                else {

                    shadowMemoryWrong(
                        card
                    );

                }

            }
        );

    }
);

// =========================================================
// WRONG MEMORY
// =========================================================

function shadowMemoryWrong(card) {

    card.classList.add(
        "wrong"
    );


    const message =
        document.getElementById(
            "shadow-memory-message"
        );


    if (message) {

        message.textContent =
            "❌ The shadow is lying. That memory does not belong to Mushak.";

    }


    setTimeout(
        function() {

            if (message) {

                message.textContent =
                    "Look again... one memory feels different.";

            }

        },
        1200
    );

}

// =========================================================
// CORRECT MEMORY
// =========================================================

function shadowMemoryCorrect() {

    shadowMemoryCompleted = true;


    const message =
        document.getElementById(
            "shadow-memory-message"
        );


    if (message) {

        message.textContent =
            "✨ Mushak remembers.";

    }


    const cards =
        document.querySelectorAll(
            ".shadow-memory-card"
        );


    cards.forEach(
        function(card) {

            card.disabled = true;

        }
    );


    const correctCard =
        document.querySelector(
            '[data-shadow-choice="' +
            shadowMemoryCorrectChoice +
            '"]'
        );


    if (correctCard) {

        correctCard.classList.add(
            "correct"
        );

    }


    setTimeout(
        function() {

            const result =
                document.getElementById(
                    "shadow-memory-result"
                );


            const symbol =
                document.getElementById(
                    "shadow-result-symbol"
                );


            const title =
                document.getElementById(
                    "shadow-result-title"
                );


            const text =
                document.getElementById(
                    "shadow-result-text"
                );


            if (result) {

                result.style.display =
                    "block";

            }


            if (symbol) {

                symbol.textContent =
                    "🛕";

            }


            if (title) {

                title.textContent =
                    "THE FIRST MEMORY";

            }


            if (text) {

                text.textContent =
                    "The temple was real. Mushak remembers standing " +
                    "beneath its ancient doorway long before this " +
                    "journey began. Someone was waiting for him there.";

            }

        },
        900
    );


    console.log(
        "🔥 REAL MEMORY FOUND"
    );

}
        
    


// =========================================================
// CHASE COMPLETED
// =========================================================

function mushakFinishChase() {

    if (!mushakChaseActive) {
        return;
    }


    mushakChaseActive = false;


    

    const message =
        document.getElementById(
            "mushak-chase-message"
        );


    if (message) {

        message.textContent =
            "✨ YOU MADE IT.";

    }


    const player =
        document.getElementById(
            "mushak-chase-player"
        );


    if (player) {

        player.style.transform =
            "scale(1.25)";

    }


    const shadow =
        document.getElementById(
            "mushak-shadow"
        );


    if (shadow) {

        shadow.style.opacity =
            "0";

    }


    setTimeout(
        function() {

            if (message) {

                message.textContent =
                    "The shrine remembers your name...";

            }

        },
        1200
    );


    setTimeout(
        function() {

            if (message) {

                message.textContent =
                    "🐭 Mushak... your journey is not over.";

            }

        },
        2500
    );


    setTimeout(
        function() {

            mushakEnterThreeDoors();

        },
        4000
    );


    console.log(
        "⚡ CHASE COMPLETED"
    );

}


// =========================================================
// CHASE LOOP
// =========================================================

function mushakChaseLoop() {

    mushakUpdateChase();

    mushakUpdateShadow();


    requestAnimationFrame(
        mushakChaseLoop
    );

}

// =========================================================
// FOLLOW THE MEMORY → TEMPLE MEMORY
// =========================================================

const shadowMemoryContinue =
    document.getElementById("shadow-memory-continue");

if (shadowMemoryContinue) {

    shadowMemoryContinue.addEventListener("click", function () {

        console.log("🐭 FOLLOW THE MEMORY clicked");

        const shadowMemory =
            document.getElementById("mushak-shadow-memory");

        const templeMemory =
            document.getElementById("mushak-temple-memory");

        // Hide the Shadow Memory scene
        if (shadowMemory) {
            shadowMemory.style.display = "none";
        }

        // Show Temple Memory
        if (templeMemory) {
            templeMemory.style.display = "block";
        }

        // Start the new sequence
        startTempleMemory();

        // Move screen to the new section
        if (templeMemory) {
            templeMemory.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

}

// =========================================================
// TEMPLE MEMORY
// =========================================================

let templeMemoryCompleted = false;

const templeCorrectChoice = 1;


function startTempleMemory() {

    templeMemoryCompleted = false;


    const reveal =
        document.getElementById(
            "temple-memory-reveal"
        );


    if (reveal) {

        reveal.style.display =
            "none";

    }


    const message =
        document.getElementById(
            "temple-memory-message"
        );


    if (message) {

        message.textContent =
            "Three fragments remain...";

    }


    document
        .querySelectorAll(
            ".temple-memory-choice"
        )
        .forEach(
            function(choice) {

                choice.disabled = false;

                choice.style.opacity =
                    "1";

                choice.style.transform =
                    "";

            }
        );


    console.log(
        "🛕 TEMPLE MEMORY STARTED"
    );

}

// =========================================================
// TEMPLE MEMORY CHOICES
// =========================================================

document
    .querySelectorAll(
        ".temple-memory-choice"
    )
    .forEach(
        function(choice) {

            choice.addEventListener(
                "click",
                function() {

                    if (
                        templeMemoryCompleted
                    ) {

                        return;

                    }


                    const selected =
                        Number(
                            choice.dataset.templeChoice
                        );


                    if (
                        selected ===
                        templeCorrectChoice
                    ) {

                        revealTempleMemory();

                    }
                    else {

                        const message =
                            document.getElementById(
                                "temple-memory-message"
                            );


                        if (message) {

                            message.textContent =
                                "That memory feels familiar... but it isn't Mushak's.";

                        }


                        choice.style.opacity =
                            "0.3";


                        choice.style.transform =
                            "scale(0.96)";

                    }

                }
            );

        }
    );

    // =========================================================
// TEMPLE MEMORY REVEAL
// =========================================================

function revealTempleMemory() {

    templeMemoryCompleted = true;


    document
        .querySelectorAll(
            ".temple-memory-choice"
        )
        .forEach(
            function(choice) {

                choice.disabled = true;

            }
        );


    const message =
        document.getElementById(
            "temple-memory-message"
        );


    if (message) {

        message.textContent =
            "✨ Mushak remembers the path.";

    }


    setTimeout(
        function() {

            const reveal =
                document.getElementById(
                    "temple-memory-reveal"
                );


            if (reveal) {

                reveal.style.display =
                    "block";

            }

        },
        700
    );


    console.log(
        "🐭 TEMPLE MEMORY RECOGNIZED"
    );

}

// =========================================================
// MUSHAK MEMORY PATH
// =========================================================

function startMushakMemoryPath() {

    console.log("🪔 MUSHAK MEMORY PATH STARTED");

    const doors =
        document.getElementById(
            "mushak-three-doors"
        );

    const memoryPath =
        document.getElementById(
            "mushak-memory-path"
        );

    const shadowMemory =
        document.getElementById(
            "mushak-shadow-memory"
        );


    // Hide the Three Doors screen

    if (doors) {

        doors.style.display =
            "none";

    }


    // Hide other memory paths

    if (shadowMemory) {

        shadowMemory.style.display =
            "none";

    }


    // Show Memory path

    if (memoryPath) {

        memoryPath.style.display =
            "block";

        memoryPath.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
    else {

        console.error(
            "❌ mushak-memory-path NOT FOUND"
        );

        return;

    }


    console.log(
        "🪔 MEMORY PATH DISPLAYED"
    );

}

// =========================================================
// CHAPTER 5 — MEMORY / COURAGE / WISDOM PATH CONNECTIONS
// =========================================================

// ---------------------------------------------------------
// MEMORY PATH
// ---------------------------------------------------------

function startMushakMemoryPath() {

    console.log("🪔 MEMORY PATH STARTED");

    const doors =
        document.getElementById(
            "mushak-three-doors"
        );

    const memoryPath =
        document.getElementById(
            "mushak-memory-path"
        );

    const shadowMemory =
        document.getElementById(
            "mushak-shadow-memory"
        );

    const wisdomPath =
        document.getElementById(
            "mushak-wisdom-path"
        );


    if (doors) {
        doors.style.display = "none";
    }

    if (shadowMemory) {
        shadowMemory.style.display = "none";
    }

    if (wisdomPath) {
        wisdomPath.style.display = "none";
    }


    if (!memoryPath) {

        console.error(
            "❌ mushak-memory-path NOT FOUND"
        );

        return;

    }


    memoryPath.style.display = "block";

    memoryPath.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    console.log(
        "🪔 MEMORY PATH DISPLAYED"
    );

}


// ---------------------------------------------------------
// MEMORY PATH — OBSERVE
// ---------------------------------------------------------

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "#memory-observe"
            );

        if (!button) {
            return;
        }


        const message =
            document.getElementById(
                "memory-path-message"
            );

        const reveal =
            document.getElementById(
                "memory-path-reveal"
            );


        if (message) {

            message.textContent =
                "👁️ Mushak waits... and the memory begins to move.";

        }


        setTimeout(
            function() {

                if (reveal) {

                    reveal.style.display =
                        "block";

                }

            },
            900
        );

    }
);


// ---------------------------------------------------------
// MEMORY PATH — ENTER TEMPLE
// ---------------------------------------------------------

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "#memory-enter-temple"
            );

        if (!button) {
            return;
        }


        console.log(
            "🛕 MUSHak ENTERED THE TEMPLE"
        );


        const memoryPath =
            document.getElementById(
                "mushak-memory-path"
            );

        const templeMemory =
            document.getElementById(
                "mushak-temple-memory"
            );


        if (memoryPath) {

            memoryPath.style.display =
                "none";

        }


        if (templeMemory) {

            templeMemory.style.display =
                "block";

            templeMemory.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            startTempleMemory();

        }
        else {

            console.error(
                "❌ mushak-temple-memory NOT FOUND"
            );

        }

    }
);


// ---------------------------------------------------------
// MEMORY FINAL REVEAL
// ---------------------------------------------------------

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "#memory-final-reveal"
            );

        if (!button) {
            return;
        }


        const reveal =
            document.getElementById(
                "memory-path-reveal"
            );

        if (reveal) {

            reveal.style.display =
                "block";

        }


        button.textContent =
            "THE MEMORY IS YOURS ✦";


        button.disabled = true;


        console.log(
            "🪔 MEMORY PATH COMPLETE"
        );

    }
);


// =========================================================
// COURAGE PATH
// =========================================================

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "#shadow-memory-continue"
            );

        if (!button) {
            return;
        }


        console.log(
            "🔥 COURAGE PATH CONTINUE"
        );


        const shadowMemory =
            document.getElementById(
                "mushak-shadow-memory"
            );

        const templeMemory =
            document.getElementById(
                "mushak-temple-memory"
            );


        if (shadowMemory) {

            shadowMemory.style.display =
                "none";

        }


        if (templeMemory) {

            templeMemory.style.display =
                "block";

            templeMemory.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


            if (
                typeof startTempleMemory ===
                "function"
            ) {

                startTempleMemory();

            }

        }
        else {

            console.error(
                "❌ mushak-temple-memory NOT FOUND"
            );

        }

    }
);


// =========================================================
// WISDOM PATH
// =========================================================

function startMushakWisdomPath() {

    console.log(
        "🌿 WISDOM PATH STARTED"
    );


    const doors =
        document.getElementById(
            "mushak-three-doors"
        );

    const wisdomPath =
        document.getElementById(
            "mushak-wisdom-path"
        );

    const memoryPath =
        document.getElementById(
            "mushak-memory-path"
        );

    const shadowMemory =
        document.getElementById(
            "mushak-shadow-memory"
        );


    if (doors) {
        doors.style.display = "none";
    }

    if (memoryPath) {
        memoryPath.style.display = "none";
    }

    if (shadowMemory) {
        shadowMemory.style.display = "none";
    }


    if (!wisdomPath) {

        console.error(
            "❌ mushak-wisdom-path NOT FOUND"
        );

        return;

    }


    wisdomPath.style.display =
        "block";


    wisdomPath.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    console.log(
        "🌿 WISDOM PATH DISPLAYED"
    );

}


// ---------------------------------------------------------
// WISDOM PATH BUTTON
// ---------------------------------------------------------

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "#wisdom-path-continue"
            );

        if (!button) {
            return;
        }


        const message =
            document.getElementById(
                "wisdom-path-message"
            );

        const reveal =
            document.getElementById(
                "wisdom-path-reveal"
            );


        if (message) {

            message.textContent =
                "🌿 Mushak does not rush. He listens.";

        }


        setTimeout(
            function() {

                if (reveal) {

                    reveal.style.display =
                        "block";

                }

            },
            800
        );


        button.disabled = true;


        console.log(
            "🌿 WISDOM PATH COMPLETE"
        );

    }
);
// =========================================================
// CONNECT THE THREE DOORS TO THEIR PATHS
// =========================================================

document.addEventListener(
    "click",
    function(event) {

        const continueButton =
            event.target.closest(
                "#three-doors-continue"
            );

        if (!continueButton) {
            return;
        }


        if (
            mushakChosenDoor === "memory"
        ) {

            startMushakMemoryPath();

        }


        if (
            mushakChosenDoor === "wisdom"
        ) {

            startMushakWisdomPath();

        }

    }
);

// =========================================================
// CHAPTER 5 — FINAL REVELATION
// =========================================================

function startMushakFinalRevelation() {

    console.log(
        "🐭 FINAL REVELATION STARTED"
    );


    const sections = [

        "mushak-three-doors",
        "mushak-memory-path",
        "mushak-shadow-memory",
        "mushak-wisdom-path",
        "mushak-temple-memory"

    ];


    sections.forEach(
        function(id) {

            const section =
                document.getElementById(id);

            if (section) {

                section.style.display =
                    "none";

            }

        }
    );


    const final =
        document.getElementById(
            "mushak-final-revelation"
        );


    if (!final) {

        console.error(
            "❌ mushak-final-revelation NOT FOUND"
        );

        return;

    }


    final.style.display =
        "block";


    final.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    const message =
        document.getElementById(
            "final-revelation-message"
        );


    if (message) {

        message.textContent =
            "Three paths brought Mushak here. " +
            "But only now can he understand why.";

    }

}

// =========================================================
// CHAPTER 5 — FINAL REVELATION
// =========================================================

function startMushakFinalRevelation() {

    console.log(
        "🐭 FINAL REVELATION STARTED"
    );


    const sections = [

        "mushak-three-doors",
        "mushak-memory-path",
        "mushak-shadow-memory",
        "mushak-wisdom-path",
        "mushak-temple-memory"

    ];


    sections.forEach(
        function(id) {

            const section =
                document.getElementById(id);

            if (section) {

                section.style.display =
                    "none";

            }

        }
    );


    const final =
        document.getElementById(
            "mushak-final-revelation"
        );


    if (!final) {

        console.error(
            "❌ mushak-final-revelation NOT FOUND"
        );

        return;

    }


    final.style.display =
        "block";


    final.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    const message =
        document.getElementById(
            "final-revelation-message"
        );


    if (message) {

        message.textContent =
            "Three paths brought Mushak here. " +
            "But only now can he understand why.";

    }

}

// =========================================================
// CHAPTER 5 — MEMORY / COURAGE / WISDOM CONVERGENCE
// =========================================================


// ---------------------------------------------------------
// MEMORY PATH → FINAL REVELATION
// ---------------------------------------------------------

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "#memory-final-reveal"
            );

        if (!button) {
            return;
        }


        console.log(
            "🪔 MEMORY PATH COMPLETE"
        );


        startMushakFinalRevelation();

    }
);


// ---------------------------------------------------------
// COURAGE PATH → FINAL REVELATION
// ---------------------------------------------------------

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "#temple-memory-continue"
            );

        if (!button) {
            return;
        }


        console.log(
            "🔥 COURAGE PATH COMPLETE"
        );


        startMushakFinalRevelation();

    }
);


// ---------------------------------------------------------
// WISDOM PATH → FINAL REVELATION
// ---------------------------------------------------------

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "#wisdom-path-continue"
            );

        if (!button) {
            return;
        }


        const message =
            document.getElementById(
                "wisdom-path-message"
            );

        const reveal =
            document.getElementById(
                "wisdom-path-reveal"
            );


        if (message) {

            message.textContent =
                "🌿 Mushak listens... and finally understands.";

        }


        if (reveal) {

            setTimeout(
                function() {

                    reveal.style.display =
                        "block";

                },
                800
            );

        }


        button.disabled = true;


        console.log(
            "🌿 WISDOM PATH COMPLETE"
        );


        setTimeout(
            function() {

                startMushakFinalRevelation();

            },
            1800
        );

    }
);


// =========================================================
// FINAL REVELATION
// =========================================================

function startMushakFinalRevelation() {

    console.log(
        "🐭 FINAL REVELATION STARTED"
    );


    const sections = [

        "mushak-three-doors",
        "mushak-memory-path",
        "mushak-shadow-memory",
        "mushak-wisdom-path",
        "mushak-temple-memory"

    ];


    sections.forEach(
        function(id) {

            const section =
                document.getElementById(id);

            if (section) {

                section.style.display =
                    "none";

            }

        }
    );


    const final =
        document.getElementById(
            "mushak-final-revelation"
        );


    if (!final) {

        console.error(
            "❌ mushak-final-revelation NOT FOUND"
        );

        return;

    }


    final.style.display =
        "block";


    final.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    const message =
        document.getElementById(
            "final-revelation-message"
        );


    if (message) {

        message.textContent =
            "Three paths brought Mushak here. " +
            "But only now can he understand why.";

    }


    const hidden =
        document.getElementById(
            "final-revelation-hidden"
        );


    if (hidden) {

        hidden.style.display =
            "none";

    }


    const continueButton =
        document.getElementById(
            "final-revelation-continue"
        );


    if (continueButton) {

        continueButton.style.display =
            "inline-block";

        continueButton.disabled =
            false;

    }

}


// =========================================================
// DISCOVER THE LAST MEMORY
// =========================================================

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "#final-revelation-continue"
            );

        if (!button) {
            return;
        }


        const hidden =
            document.getElementById(
                "final-revelation-hidden"
            );


        if (hidden) {

            hidden.style.display =
                "block";

            hidden.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }


        button.style.display =
            "none";


        console.log(
            "🐭 LAST MEMORY REVEALED"
        );

    }
);


// =========================================================
// COMPLETE CHAPTER 5
// =========================================================

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "#final-chapter-complete"
            );

        if (!button) {
            return;
        }


        console.log(
            "🏆 CHAPTER 5 COMPLETE"
        );


        const firstCompletion =
            completeChapterOnce(
                5,
                500
            );


        // Store the final memory only once
        if (firstCompletion) {

            if (
                typeof collectMemoryFragment ===
                "function"
            ) {

                collectMemoryFragment(
                    "Chapter 5 - Mushak's Journey"
                );

            }

        }


        // Update chapter map
        if (
            typeof updateChapterMap ===
            "function"
        ) {

            updateChapterMap();

        }


        const final =
            document.getElementById(
                "mushak-final-revelation"
            );


        if (final) {

            final.style.display =
                "none";

        }


        const complete =
            document.getElementById(
                "mushak-complete"
            );


        if (complete) {

            complete.style.display =
                "block";

            complete.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }


        button.disabled =
            true;


        button.textContent =
            "THE LOST CHAPTERS ARE RESTORED ✦";


        console.log(
            "🐭 MUSHAK'S JOURNEY COMPLETE"
        );

    }
);

// =========================================================
// CHAPTER 5 COMPLETE → RETURN TO STORY MAP
// =========================================================

const mushakContinueButton =
    document.getElementById(
        "mushak-continue-button"
    );

if (mushakContinueButton) {

    mushakContinueButton.addEventListener(
        "click",
        function () {

            console.log(
                "🐭 RETURNING TO STORY MAP"
            );

            // Hide Chapter 5 screen
            const chapter5 =
                document.getElementById(
                    "chapter-5-screen"
                );

            if (chapter5) {
                chapter5.style.display = "none";
            }


            // Hide completion panel
            const completePanel =
                document.getElementById(
                    "mushak-complete"
                );

            if (completePanel) {
                completePanel.style.display = "none";
            }


            // Show Story Map
            const storyMap =
                document.getElementById(
                    "story-map"
                );

            if (storyMap) {

                storyMap.style.display =
                    "block";

                storyMap.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }


            // Refresh progress and chapter locks
            if (
                typeof updateStoryProgress ===
                "function"
            ) {
                updateStoryProgress();
            }


            if (
                typeof updateChapterMap ===
                "function"
            ) {
                updateChapterMap();
            }


            console.log(
                "🗺️ STORY MAP DISPLAYED"
            );

        }
    );

}
// =========================================================
// STORY BOOK
// =========================================================

function openStoryBook() {

    console.log("📖 STORY BOOK OPENED");

    const mainMenu =
        document.getElementById("main-menu");

    const storyMap =
        document.getElementById("story-map");

    const storyBook =
        document.getElementById("story-book");


    if (mainMenu) {
        mainMenu.style.display = "none";
    }

    if (storyMap) {
        storyMap.style.display = "none";
    }


    // Hide active chapter screens
    const chapterScreens = [
        "chapter-1-screen",
        "chapter-2-screen",
        "chapter-3-screen",
        "chapter-4-screen",
        "chapter-5-screen"
    ];


    chapterScreens.forEach(
        function(id) {

            const screen =
                document.getElementById(id);

            if (screen) {
                screen.style.display = "none";
            }

        }
    );


    if (storyBook) {

        storyBook.style.display = "block";

        storyBook.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    updateStoryBook();

}


// =========================================================
// UPDATE STORY BOOK
// =========================================================

function updateStoryBook() {

    const stories = {

        1:
            "Ganesha's journey begins with a creation born from love and purpose. A forgotten memory reveals the beginning of a path that will eventually connect every chapter.",

        2:
            "Ganesha stood as a guardian, protecting what had been entrusted to him. The memory reveals that courage can grow from responsibility.",

        3:
            "What was once broken has been transformed. The restored memory reveals that change can become part of something greater.",

        4:
            "The journey reveals that wisdom is not only knowledge. It is the patience to observe, the clarity to remember, and the understanding to choose a thoughtful path.",

        5:
            "Mushak discovered that the memories were never asking him to find someone else. Memory showed him the past. Courage showed him what he could face. Wisdom showed him how to understand it. The journey was following Mushak."

    };


    for (
        let chapter = 1;
        chapter <= 5;
        chapter++
    ) {

        const text =
            document.getElementById(
                "story-book-text-" + chapter
            );


        const card =
            document.getElementById(
                "story-book-chapter-" + chapter
            );


        if (!text || !card) {
            continue;
        }


        if (
            gameState.completedChapters[chapter]
        ) {

            text.textContent =
                stories[chapter];


            card.style.opacity = "1";

            card.style.filter = "none";


        }
        else {

            text.textContent =
                "🔒 This memory has not yet been recovered.";

            card.style.opacity = "0.55";

            card.style.filter = "grayscale(0.7)";

        }

    }


    console.log(
        "📖 Story Book updated:",
        gameState.memoryFragments
    );

}



// =========================================================
// STORY BOOK
// =========================================================

const storyButton =
    document.getElementById("story-button");

if (storyButton) {

    storyButton.addEventListener(
        "click",
        function () {

            console.log("📖 STORY BOOK OPENED");

            const mainMenu =
                document.getElementById("main-menu");

            const storyBook =
                document.getElementById("story-book");

            console.log(
                "STORY BOOK ELEMENT:",
                storyBook
            );

            if (!storyBook) {

                console.error(
                    "❌ STORY BOOK HTML NOT FOUND"
                );

                alert(
                    "Story Book HTML is missing from index.html"
                );

                return;
            }

            if (mainMenu) {
                mainMenu.style.display = "none";
            }

            /*
             * Remove screen-system hiding
             */
            storyBook.classList.remove("screen");

            /*
             * Force Story Book to become visible
             */
            storyBook.style.display = "block";

            storyBook.style.visibility = "visible";

            storyBook.style.opacity = "1";

            storyBook.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );
}


// =========================================================
// STORY BOOK — BACK TO MENU
// =========================================================

const storyBookBack =
    document.getElementById("story-book-back");

if (storyBookBack) {

    storyBookBack.addEventListener(
        "click",
        function () {

            console.log(
                "📖 STORY BOOK CLOSED"
            );

            const storyBook =
                document.getElementById("story-book");

            const mainMenu =
                document.getElementById("main-menu");

            if (storyBook) {

                storyBook.style.display =
                    "none";
            }

            if (mainMenu) {

                mainMenu.style.display =
                    "block";
            }

        }
    );
}

// =========================================================
// LEADERBOARD
// =========================================================

function updateLeaderboard() {

    console.log("🏆 UPDATING LEADERBOARD");


    // -----------------------------------------
    // TOTAL SCORE
    // -----------------------------------------

    const totalScore =
        document.getElementById(
            "leaderboard-total-score"
        );

    if (totalScore) {

        totalScore.textContent =
            gameState.score;

    }


    // -----------------------------------------
    // CHAPTER COUNT
    // -----------------------------------------

    const chapters =
        document.getElementById(
            "leaderboard-chapters"
        );

    if (chapters) {

        chapters.textContent =
            gameState.chaptersCompleted +
            " / 5";

    }


    // -----------------------------------------
    // MEMORY COUNT
    // -----------------------------------------

    const memories =
        document.getElementById(
            "leaderboard-memories"
        );

    if (memories) {

        memories.textContent =
            gameState.memoryFragments.length;

    }


    // -----------------------------------------
    // MUSHAK STATUS
    // -----------------------------------------

    const mushak =
        document.getElementById(
            "leaderboard-mushak"
        );

    if (mushak) {

        if (
            gameState.completedChapters[5]
        ) {

            mushak.textContent =
                "COMPLETE";

        }
        else if (
            gameState.chaptersCompleted >= 4
        ) {

            mushak.textContent =
                "UNLOCKED";

        }
        else {

            mushak.textContent =
                "LOCKED";

        }

    }


    // -----------------------------------------
    // CHAPTER STATUS
    // -----------------------------------------

    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        const element =
            document.getElementById(
                "leaderboard-chapter-" + i
            );

        if (!element) {
            continue;
        }


        if (
            gameState.completedChapters[i]
        ) {

            element.textContent =
                "✓ COMPLETED";

        }
        else {

            element.textContent =
                "LOCKED";

        }

    }


    // -----------------------------------------
    // FINAL MESSAGE
    // -----------------------------------------

    const finalMessage =
        document.getElementById(
            "leaderboard-final-message"
        );

    if (finalMessage) {

        if (
            gameState.chaptersCompleted >= 5
        ) {

            finalMessage.textContent =
                "🐭 All five lost chapters have been restored. " +
                "The complete memory has returned.";

        }
        else {

            finalMessage.textContent =
                "Recover all five memories to complete " +
                "the lost chapters.";

        }

    }

}


// =========================================================
// OPEN LEADERBOARD
// =========================================================

const leaderboardButton =
    document.getElementById(
        "leaderboard-button"
    );

if (leaderboardButton) {

    leaderboardButton.addEventListener(
        "click",
        function() {

            console.log(
                "🏆 LEADERBOARD OPENED"
            );


            const mainMenu =
                document.getElementById(
                    "main-menu"
                );

            const leaderboard =
                document.getElementById(
                    "leaderboard-screen"
                );


            if (!leaderboard) {

                console.error(
                    "❌ LEADERBOARD SCREEN NOT FOUND"
                );

                return;

            }


            if (mainMenu) {

                mainMenu.style.display =
                    "none";

            }


            leaderboard.style.display =
                "block";


            updateLeaderboard();


            leaderboard.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}


// =========================================================
// LEADERBOARD — BACK TO MENU
// =========================================================

const leaderboardBack =
    document.getElementById(
        "leaderboard-back"
    );

if (leaderboardBack) {

    leaderboardBack.addEventListener(
        "click",
        function() {

            console.log(
                "🏆 LEADERBOARD CLOSED"
            );


            const leaderboard =
                document.getElementById(
                    "leaderboard-screen"
                );

            const mainMenu =
                document.getElementById(
                    "main-menu"
                );


            if (leaderboard) {

                leaderboard.style.display =
                    "none";

            }


            if (mainMenu) {

                mainMenu.style.display =
                    "block";

            }

        }
    );

}

// =========================================================
// SUPABASE CONNECTION TEST
// =========================================================

async function testSupabaseConnection() {

    console.log("☁️ TESTING SUPABASE CONNECTION...");

    if (typeof supabaseClient === "undefined") {
        console.error("❌ supabaseClient NOT FOUND");
        return;
    }

    try {

        const { data, error } = await supabaseClient
            .from("leaderboard")
            .select("player_id")
            .limit(1);

        if (error) {
            console.error("❌ SUPABASE ERROR:", error);
            return;
        }

        console.log("✅ SUPABASE CONNECTED!");
        console.log("☁️ Leaderboard database is reachable.");
        console.log("Existing players:", data);

    } catch (error) {

        console.error("❌ SUPABASE CONNECTION FAILED:", error);

    }
}


window.addEventListener("load", function() {

    setTimeout(function() {
        testSupabaseConnection();
    }, 1000);

});

// =========================================================
// 🌐 GLOBAL ONLINE LEADERBOARD
// =========================================================

let onlinePlayerId = localStorage.getItem("ganesha_player_id");

if (!onlinePlayerId) {
    if (window.crypto && crypto.randomUUID) {
        onlinePlayerId = crypto.randomUUID();
    } else {
        onlinePlayerId =
            "player-" +
            Date.now() +
            "-" +
            Math.random().toString(36).substring(2, 8);
    }

    localStorage.setItem("ganesha_player_id", onlinePlayerId);
}

let onlinePlayerName =
    localStorage.getItem("ganesha_player_name");

    // Prevent the fresh page-load state (score 0)
// from overwriting the player's saved online progress.
let onlinePlayerLoaded = false;

function getOnlinePlayerName() {

    if (!onlinePlayerName) {

        let name = prompt(
            "Enter your player name for the Global Leaderboard:"
        );

        if (!name || !name.trim()) {
            name = "Player-" + onlinePlayerId.substring(0, 6);
        }

        onlinePlayerName = name.trim().substring(0, 20);

        localStorage.setItem(
            "ganesha_player_name",
            onlinePlayerName
        );
    }

    return onlinePlayerName;
}




// ---------------------------------------------------------
// SAVE CURRENT PLAYER
// ---------------------------------------------------------

async function syncPlayerToLeaderboard() {

        if (!onlinePlayerLoaded) {
        console.log("☁️ Waiting for saved player progress...");
        return;
    }

    if (typeof supabaseClient === "undefined") {
        console.error("❌ Supabase client unavailable");
        return;
    }

    const playerName = getOnlinePlayerName();

    const playerData = {
        player_id: onlinePlayerId,
        player_name: playerName,
        score: gameState.score,
        chapters_completed: gameState.chaptersCompleted,
        memories_recovered: gameState.memoryFragments.length,
        chapter_5_completed:
            gameState.completedChapters[5] === true
    };

    try {

        const { data: existing, error: findError } =
            await supabaseClient
                .from("leaderboard")
                .select("id")
                .eq("player_id", onlinePlayerId)
                .limit(1);

        if (findError) {
            console.error("❌ PLAYER LOOKUP ERROR:", findError);
            return;
        }

        if (existing && existing.length > 0) {

            const { error: updateError } =
                await supabaseClient
                    .from("leaderboard")
                    .update(playerData)
                    .eq("player_id", onlinePlayerId);

            if (updateError) {
                console.error(
                    "❌ LEADERBOARD UPDATE ERROR:",
                    updateError
                );
                return;
            }

        } else {

            const { error: insertError } =
                await supabaseClient
                    .from("leaderboard")
                    .insert([playerData]);

            if (insertError) {
                console.error(
                    "❌ LEADERBOARD INSERT ERROR:",
                    insertError
                );
                return;
            }
        }

        console.log("☁️ PLAYER SCORE SYNCED:", playerData);

    } catch (error) {

        console.error(
            "❌ ONLINE LEADERBOARD ERROR:",
            error
        );
    }
}

// =========================================================
// ☁️ RESTORE PLAYER PROGRESS FROM SUPABASE
// =========================================================

async function loadOnlinePlayerProgress() {

    if (typeof supabaseClient === "undefined") {
        console.error("❌ Supabase client unavailable");
        return;
    }

    try {

        const { data, error } =
            await supabaseClient
                .from("leaderboard")
                .select(
                    "player_name, score, chapters_completed, memories_recovered, chapter_5_completed"
                )
                .eq("player_id", onlinePlayerId)
                .limit(1);

        if (error) {

            console.error(
                "❌ COULD NOT LOAD PLAYER PROGRESS:",
                error
            );

            // Allow a new player to start normally.
            onlinePlayerLoaded = true;
            return;
        }

        if (data && data.length > 0) {

            const saved = data[0];

            console.log(
                "☁️ SAVED PLAYER PROGRESS FOUND:",
                saved
            );

            // Restore score
            gameState.score =
                Number(saved.score) || 0;

            // Restore chapter progress
            gameState.chaptersCompleted =
                Number(saved.chapters_completed) || 0;

            // Restore completed chapters
            for (let i = 1; i <= 5; i++) {
                gameState.completedChapters[i] =
                    i <= gameState.chaptersCompleted;
            }

            // Make Chapter 5 exact
            if (saved.chapter_5_completed === true) {
                gameState.completedChapters[5] = true;
                gameState.chaptersCompleted = 5;
            }

            // Restore memory count.
            // The actual names are not required by the leaderboard.
            const memoryCount =
                Number(saved.memories_recovered) || 0;

            gameState.memoryFragments = [];

            for (let i = 0; i < memoryCount; i++) {
                gameState.memoryFragments.push(
                    "Recovered Memory " + (i + 1)
                );
            }

            if (typeof updateStoryProgress === "function") {
                updateStoryProgress();
            }

            if (typeof updateLeaderboard === "function") {
                updateLeaderboard();
            }

            console.log(
                "✅ PLAYER PROGRESS RESTORED!",
                gameState
            );

        } else {

            console.log(
                "☁️ No saved progress found. New player."
            );
        }

        // IMPORTANT:
        // Only now is it safe to upload gameState.
        onlinePlayerLoaded = true;

    } catch (error) {

        console.error(
            "❌ PLAYER PROGRESS RESTORE FAILED:",
            error
        );

        onlinePlayerLoaded = true;
    }
}

// ---------------------------------------------------------
// LOAD GLOBAL LEADERBOARD
// ---------------------------------------------------------

async function loadGlobalLeaderboard() {

    const container =
        document.getElementById("global-leaderboard-list");

    if (!container) return;

    container.innerHTML =
        '<div style="text-align:center;padding:20px;">' +
        '☁️ Loading global players...' +
        '</div>';

    try {

        const { data, error } =
            await supabaseClient
                .from("leaderboard")
                .select(
                    "player_name, score, chapters_completed, memories_recovered, chapter_5_completed"
                )
                .order("score", { ascending: false })
                .order("chapters_completed", {
                    ascending: false
                })
                .limit(50);

        if (error) {
            console.error(
                "❌ GLOBAL LEADERBOARD ERROR:",
                error
            );

            container.innerHTML =
                '<div style="text-align:center;padding:20px;">' +
                'Unable to load leaderboard.' +
                '</div>';

            return;
        }

        if (!data || data.length === 0) {

            container.innerHTML =
                '<div style="text-align:center;padding:20px;">' +
                'No players yet. Be the first! 🐭' +
                '</div>';

            return;
        }

        let html = "";

        data.forEach(function(player, index) {

            const rank = index + 1;

            const completed =
                player.chapters_completed || 0;

            const score =
                player.score || 0;

            const name =
                player.player_name || "Unknown Player";

            const currentPlayer =
                player.player_name === onlinePlayerName;

            html +=
                '<div class="global-player-row" ' +
                (currentPlayer
                    ? 'style="border:2px solid #f5c86a;"'
                    : '') +
                '>' +

                '<div class="global-rank">' +
                rank +
                '</div>' +

                '<div class="global-player-name">' +
                (rank === 1 ? "👑 " : "") +
                name +
                (currentPlayer ? " ⭐" : "") +
                '</div>' +

                '<div class="global-player-chapters">' +
                completed +
                '/5' +
                '</div>' +

                '<div class="global-player-score">' +
                score +
                '</div>' +

                '</div>';
        });

        container.innerHTML = html;

    } catch (error) {

        console.error(
            "❌ GLOBAL LEADERBOARD FAILED:",
            error
        );

        container.innerHTML =
            '<div style="text-align:center;padding:20px;">' +
            'Leaderboard connection failed.' +
            '</div>';
    }
}


// ---------------------------------------------------------
// UPDATE WHEN LEADERBOARD OPENS
// ---------------------------------------------------------

const originalLeaderboardButton =
    document.getElementById("leaderboard-button");

if (originalLeaderboardButton) {

    originalLeaderboardButton.addEventListener(
        "click",
        function() {

            getOnlinePlayerName();

            syncPlayerToLeaderboard();

            setTimeout(function() {
                loadGlobalLeaderboard();
            }, 500);
        }
    );
}


// ---------------------------------------------------------
// AUTOMATIC SCORE SYNC
// ---------------------------------------------------------

setInterval(function() {

    if (
        typeof gameState !== "undefined" &&
        typeof supabaseClient !== "undefined"
    ) {

        if (
            gameState.score > 0 ||
            gameState.chaptersCompleted > 0 ||
            gameState.memoryFragments.length > 0
        ) {
            syncPlayerToLeaderboard();
        }
    }

}, 5000);


// Refresh leaderboard while it is open

setInterval(function() {

    const leaderboard =
        document.getElementById("leaderboard-screen");

    if (
        leaderboard &&
        leaderboard.style.display !== "none"
    ) {
        loadGlobalLeaderboard();
    }

}, 5000);

// =========================================================
// ☁️ LOAD SAVED PLAYER AFTER SUPABASE STARTUP
// =========================================================

window.addEventListener("load", function() {

    setTimeout(function() {

        loadOnlinePlayerProgress();

    }, 1500);

});