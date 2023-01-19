let playerBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let testBoard = [
    [0, 8, 7, 4, 9, 1, 6, 2, 5],
    [2, 4, 1, 5, 6, 8, 3, 7, 9],
    [5, 6, 9, 3, 2, 7, 4, 1, 8],
    [7, 5, 8, 6, 1, 9, 2, 3, 4],
    [1, 2, 3, 7, 8, 4, 5, 9, 6],
    [4, 9, 6, 2, 5, 3, 1, 8, 7],
    [9, 3, 4, 1, 7, 6, 8, 5, 2],
    [6, 7, 5, 8, 3, 2, 9, 4, 1],
    [8, 1, 2, 9, 4, 5, 7, 6, 3]
];
let testSolution = [
    [3, 8, 7, 4, 9, 1, 6, 2, 5],
    [2, 4, 1, 5, 6, 8, 3, 7, 9],
    [5, 6, 9, 3, 2, 7, 4, 1, 8],
    [7, 5, 8, 6, 1, 9, 2, 3, 4],
    [1, 2, 3, 7, 8, 4, 5, 9, 6],
    [4, 9, 6, 2, 5, 3, 1, 8, 7],
    [9, 3, 4, 1, 7, 6, 8, 5, 2],
    [6, 7, 5, 8, 3, 2, 9, 4, 1],
    [8, 1, 2, 9, 4, 5, 7, 6, 3]
];
let board1 = [
    [0, 0, 7, 4, 9, 1, 6, 0, 5],
    [2, 0, 0, 0, 6, 0, 3, 0, 9],
    [0, 0, 0, 0, 0, 7, 0, 1, 0],
    [0, 5, 8, 6, 0, 0, 0, 0, 4],
    [0, 0, 3, 0, 0, 0, 0, 9, 0],
    [0, 0, 6, 2, 0, 0, 1, 8, 7],
    [9, 0, 4, 0, 7, 0, 0, 0, 2],
    [6, 7, 0, 8, 3, 0, 0, 0, 0],
    [8, 1, 0, 0, 4, 5, 0, 0, 0]
];
let solution1 = [
    [3, 8, 7, 4, 9, 1, 6, 2, 5],
    [2, 4, 1, 5, 6, 8, 3, 7, 9],
    [5, 6, 9, 3, 2, 7, 4, 1, 8],
    [7, 5, 8, 6, 1, 9, 2, 3, 4],
    [1, 2, 3, 7, 8, 4, 5, 9, 6],
    [4, 9, 6, 2, 5, 3, 1, 8, 7],
    [9, 3, 4, 1, 7, 6, 8, 5, 2],
    [6, 7, 5, 8, 3, 2, 9, 4, 1],
    [8, 1, 2, 9, 4, 5, 7, 6, 3]
];
let board2 = [
    [0, 0, 0, 9, 0, 0, 0, 6, 7],
    [0, 9, 0, 0, 0, 0, 2, 0, 8],
    [4, 6, 0, 0, 7, 8, 0, 0, 0],
    [3, 2, 0, 0, 9, 4, 0, 7, 0],
    [7, 0, 0, 6, 0, 3, 0, 0, 2],
    [0, 1, 0, 7, 8, 0, 0, 4, 3],
    [0, 0, 0, 8, 5, 0, 0, 1, 6],
    [5, 0, 1, 0, 0, 0, 0, 9, 0],
    [6, 7, 0, 0, 0, 9, 0, 0, 0]
];
let solution2 = [
    [8, 3, 5, 9, 2, 1, 4, 6, 7],
    [1, 9, 7, 4, 6, 5, 2, 3, 8],
    [4, 6, 2, 3, 7, 8, 1, 5, 9],
    [3, 2, 8, 5, 9, 4, 6, 7, 1],
    [7, 5, 4, 6, 1, 3, 9, 8, 2],
    [9, 1, 6, 7, 8, 2, 5, 4, 3],
    [2, 4, 9, 8, 5, 7, 3, 1, 6],
    [5, 8, 1, 2, 3, 6, 7, 9, 4],
    [6, 7, 3, 1, 4, 9, 8, 2, 5]
];
let board3 = [
    [0, 4, 0, 0, 1, 0, 9, 0, 8],
    [8, 0, 5, 0, 0, 0, 7, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 2, 0, 0, 0, 5, 0, 0, 4],
    [0, 0, 1, 6, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 8, 0, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 6, 0],
    [3, 0, 4, 0, 0, 0, 8, 0, 0],
    [0, 8, 0, 0, 9, 0, 4, 0, 3]
];
let solution3 = [
    [6, 4, 3, 5, 1, 7, 9, 2, 8],
    [8, 1, 5, 3, 2, 9, 7, 4, 6],
    [2, 9, 7, 8, 6, 4, 3, 1, 5],
    [9, 2, 8, 1, 7, 5, 6, 3, 4],
    [4, 7, 1, 6, 3, 2, 5, 8, 9],
    [5, 3, 6, 9, 4, 8, 1, 7, 2],
    [7, 5, 9, 4, 8, 3, 2, 6, 1],
    [3, 6, 4, 2, 5, 1, 8, 9, 7],
    [1, 8, 2, 7, 9, 6, 4, 5, 3]
];
const ButtonTest = document.getElementById("difficultyTest");
const ButtonEasy = document.getElementById("difficultyEasy");
const ButtonMedium = document.getElementById("difficultyMedium");
const ButtonHard = document.getElementById("difficultyHard");
const ButtonRandom = document.getElementById("difficultyRandom");
const titleSiadoku = document.getElementById("titleSiadoku");
const gameBoard = document.getElementById("gameContainer");
const mainMenu = document.getElementById("mainMenu");
const highScores = document.getElementById("highScores");
const scoreTableButton = document.getElementById("scoreTableButton");
const showHintsButton = document.getElementById("showHintsButton");
const revealNumberButton = document.getElementById("revealNumberButton");
const showSolutionButton = document.getElementById("showSolutionButton");
const nickNameInput = document.getElementById("nickNameInput");
const backToMenu = document.getElementById("backToMenu");
const optionsButton = document.getElementById("options");
const scoreField = document.getElementById("score");
ButtonTest.addEventListener("click", setDifficultyTest);
ButtonEasy.addEventListener("click", setDifficultyEasy);
ButtonMedium.addEventListener("click", setDifficultyMedium);
ButtonHard.addEventListener("click", setDifficultyHard);
ButtonRandom.addEventListener("click", setDifficultyRandom);
scoreTableButton.addEventListener("click", showHighScores);
showHintsButton.addEventListener("click", toggleHints);
revealNumberButton.addEventListener("click", revealOneNumber);
showSolutionButton.addEventListener("click", showSolution);
nickNameInput.addEventListener("keyup", checkName);
backToMenu.addEventListener("click", resetGame);
let playerName = "";
let tileSelected = null;
let score = 0;
let revealedNumbers = 0;
let difficulty;
let hints;
window.onload = function () {
    checkName;
};
//Sprawdz czy imie jest dozwolone i przelacz przyciski w menu
function checkName() {
    playerName = nickNameInput.value;
    toggleButtons();
}
//Reset gry po wcisniecid przycisku powrot
function resetGame() {
    highScores.classList.add("hide");
    gameBoard.classList.add("hide");
    backToMenu.classList.add("hide");
    optionsButton.classList.remove("hide");
    mainMenu.classList.remove("hide");
    titleSiadoku.classList.remove("hide");
    showHintsButton.classList.remove("clicked");
    for (let i = 1; i < highScores.childElementCount; i++) {
        highScores.removeChild(highScores.lastChild);
    }
    hints = false;
    score = 0;
    resetPlayerBoard();
}
//Po wybraniu trudnosci przyciskiem rozpoczyna sie gra
function startGame() {
    titleSiadoku.classList.add("hide");
    mainMenu.classList.add("hide");
    gameBoard.classList.remove("hide");
    backToMenu.classList.remove("hide");
    checkName();
    resetPlayerBoard();
    createBoard(getBoard(difficulty));
    refreshScore();
}
//Odswierz wynik
function refreshScore() {
    scoreField.innerText = String(score);
}
//Resetuje plansze po powrocie do menu
function resetPlayerBoard() {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            playerBoard[r][c] = 0;
            let tile = document.getElementById(String(r) + String(c));
            tile.classList.remove("startTile");
            tile.classList.remove("filledTile");
            tile.classList.remove("revealedNumber");
        }
        document.getElementById(String(r + 1)).classList.add("hide");
    }
}
//Przyciski w menu gasna jak nie ma imienia
function toggleButtons() {
    if (playerName == "") {
        ButtonTest.disabled = true;
        ButtonEasy.disabled = true;
        ButtonMedium.disabled = true;
        ButtonHard.disabled = true;
        ButtonRandom.disabled = true;
    }
    else {
        ButtonTest.disabled = false;
        ButtonEasy.disabled = false;
        ButtonMedium.disabled = false;
        ButtonHard.disabled = false;
        ButtonRandom.disabled = false;
    }
}
//Przyciski w menu poziom trudnosci + start gry
function setDifficultyTest() {
    difficulty = "test";
    startGame();
}
function setDifficultyEasy() {
    difficulty = "easy";
    startGame();
}
function setDifficultyMedium() {
    difficulty = "medium";
    startGame();
}
function setDifficultyHard() {
    difficulty = "hard";
    startGame();
}
function setDifficultyRandom() {
    let rand = (Math.floor(Math.random() * 3)) + 1;
    switch (rand) {
        case 1:
            difficulty = "easy";
            break;
        case 2:
            difficulty = "medium";
            break;
        case 3:
            difficulty = "hard";
            break;
    }
    startGame();
}
//Pobierz plansze zaleznie od poziomu trudnosci
function getBoard(difficulty) {
    switch (difficulty) {
        case "easy": return board1;
        case "medium": return board2;
        case "hard": return board3;
        case "test": return testBoard;
    }
}
//Pobierz rozwiazanie planszy zaleznie od poziomu trudnosci
function getSolution(difficulty) {
    switch (difficulty) {
        case "easy": return solution1;
        case "medium": return solution2;
        case "hard": return solution3;
        case "test": return testSolution;
    }
}
//Wypelnij plansze liczbami
function createBoard(board) {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.getElementById(String(r) + String(c));
            if (board[r][c] != 0) {
                playerBoard[r][c] = board[r][c];
                tile.innerText = board[r][c].toString();
                tile.classList.add("startTile");
            }
            else {
                tile.innerText = String("");
            }
            tile.addEventListener("click", selectTile);
            if (r == 2 || r == 5) {
                tile.classList.add("horizontalLine");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("verticalLine");
            }
        }
    }
}
//Funkcja wywolywana po zaznaczeniu pola
function selectTile() {
    if (tileSelected != null) {
        tileSelected.classList.remove("selected");
    }
    tileSelected = this;
    tileSelected.classList.add("selected");
    refreshHints();
    readPlayerBoard();
    //Kasowanie cyfry po dbclick
    document.ondblclick = function () {
        if (tileSelected.classList.contains("filledTile")) {
            tileSelected.innerText = String("");
            tileSelected.classList.remove("filledTile");
            score = score - 1;
            refreshScore();
        }
    };
    //Dodawanie cyfry z klawiatury 
    //By postawic znak, musi to byc liczba, pole nie moze byc zajete i cyfra sie nie powtarza
    document.onkeydown = function (event) {
        if (checkIfDigit()) {
            if (checkTileRow(tileSelected, event.key) && (checkTileColumn(tileSelected, event.key))) {
                if (tileSelected.classList.contains("filledTile") && tileSelected.innerText != event.key) {
                    tileSelected.innerText = String(event.key);
                    console.log(String(event.key));
                    score = score - 1;
                    tileSelected.classList.add("filledTile");
                }
                else {
                    tileSelected.innerText = String(event.key);
                    console.log(String(event.key));
                    tileSelected.classList.add("filledTile");
                    checkIfWin();
                }
            }
        }
        refreshScore();
        //Czy nacisniety klawisz to liczba do 1 do 9
        function checkIfDigit() {
            if (((event.code).slice(0, 5) == "Digit") &&
                (event.key != "Digit0") &&
                (!tileSelected.classList.contains("startTile"))) {
                return true;
            }
            return false;
        }
        //Czy w danym rzedzie jest juz taka cyfra
        function checkTileRow(tile, number) {
            for (let c = 0; c < 9; c++) {
                if (playerBoard[tile.id[0]][c] == number) {
                    return false;
                }
            }
            return true;
        }
        //Czy w danej kolumnie jest juz taka cyfra
        function checkTileColumn(tile, number) {
            for (let r = 0; r < 9; r++) {
                if (playerBoard[r][tile.id[1]] == number) {
                    return false;
                }
            }
            return true;
        }
        //Sprawdz czy sudoku zostalo ukonczone
        function checkIfWin() {
            readPlayerBoard();
            let ok = 0;
            for (let r = 0; r < 9; r++) {
                for (let c = 0; c < 9; c++) {
                    if (playerBoard[r][c] == getSolution(difficulty)[r][c]) {
                        ok++;
                    }
                }
            }
            //Jesli tak zaktualizuj dane w lokalStorage
            if (ok == 81) {
                if (localStorage.getItem("Gracz " + playerName + ", poziom " + difficulty + ", wynik = ")) {
                    score = parseInt(localStorage.getItem("Gracz " + playerName + ", poziom " + difficulty + ", wynik = "));
                }
                else {
                    score = 0;
                }
                switch (difficulty) {
                    case "test":
                        score = score + 1000;
                        break;
                    case "easy":
                        score = score + 25;
                        break;
                    case "medium":
                        score = score + 50;
                        break;
                    case "hard":
                        score = score + 100;
                        break;
                }
                if (score < 0) {
                    score = 0;
                }
                localStorage.setItem("Gracz " + playerName + ", poziom " + difficulty + ", wynik = ", String(score));
                backToMenu.classList.remove("hide");
            }
        }
    };
}
//Przycisk pokazania wynikow, pobranie z localStorage
function showHighScores() {
    mainMenu.classList.add("hide");
    gameBoard.classList.add("hide");
    titleSiadoku.classList.add("hide");
    highScores.classList.remove("hide");
    backToMenu.classList.remove("hide");
    scoreTableButton.classList.remove("hide");
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        let scoreBlock = document.createElement("div");
        scoreBlock.classList.add("button");
        scoreBlock.innerText = (key + " " + value);
        highScores.appendChild(scoreBlock);
    }
}
//Funkcja kola ratunkowego, odsloniece kwadratu
function revealOneNumber() {
    if (tileSelected != null) {
        if ((tileSelected.innerText == "") && (revealedNumbers == 0)) {
            let solution = getSolution(difficulty);
            tileSelected.innerText = solution[tileSelected.id[0]][tileSelected.id[1]];
            tileSelected.classList.add("revealedNumber");
            tileSelected.classList.add("startTile");
            revealNumberButton.innerText = "Rozwiaz wybrane pole -10p";
            revealedNumbers = 1;
            refreshScore();
        }
        if ((tileSelected.innerText == "") && (revealedNumbers == 1)) {
            let solution = getSolution(difficulty);
            tileSelected.innerText = solution[tileSelected.id[0]][tileSelected.id[1]];
            tileSelected.classList.add("revealedNumber");
            tileSelected.classList.add("startTile");
            revealNumberButton.innerText = "Rozwiaz wybrane pole -20p";
            revealedNumbers = 2;
            score = score - 5;
            refreshScore();
        }
        if ((tileSelected.innerText == "") && (revealedNumbers == 2)) {
            let solution = getSolution(difficulty);
            tileSelected.innerText = solution[tileSelected.id[0]][tileSelected.id[1]];
            tileSelected.classList.add("revealedNumber");
            tileSelected.classList.add("startTile");
            revealedNumbers = 3;
            revealNumberButton.innerText = "Koniec tego dobrego";
            revealNumberButton.disabled = true;
            score = score - 10;
            refreshScore();
        }
    }
}
//Odswieza popdpowiedzi
function toggleHints() {
    if (hints) {
        hints = false;
        showHintsButton.classList.remove("clicked");
    }
    else {
        hints = true;
        showHintsButton.classList.add("clicked");
    }
}
function refreshHints() {
    if (hints && (tileSelected != null) && !tileSelected.classList.contains("startTile")) {
        for (let i = 1; i < 10; i++) {
            document.getElementById(String(i)).classList.remove("hide");
        }
        showHints(tileSelected);
    }
    else {
        for (let i = 1; i < 10; i++) {
            document.getElementById(String(i)).classList.add("hide");
        }
    }
}
//Pokazuje w podpowiedzi cyfry ktore mozna wstawic a chowa te ktorych nie mozna uzyc
function showHints(tileSelected) {
    let rowId = tileSelected.id[0];
    let colId = tileSelected.id[1];
    //Sprawdz kolumny
    for (let r = 0; r < 9; r++) {
        for (let i = 1; i < 10; i++) {
            if (document.getElementById(String(r) + String(colId)).innerText == String(i)) {
                document.getElementById(String(i)).classList.add("hide");
            }
        }
    }
    //Sprawdz rzedy
    for (let c = 0; c < 9; c++) {
        for (let i = 1; i < 10; i++) {
            if (document.getElementById(String(rowId) + String(c)).innerText == String(i)) {
                document.getElementById(String(i)).classList.add("hide");
            }
        }
    }
}
//Czyta obecna zawartosc sudoku gracza
function readPlayerBoard() {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.getElementById(String(r) + String(c));
            let number = tile.innerText;
            if (String(number) != "") {
                playerBoard[r][c] = parseInt(number);
            }
            else {
                playerBoard[r][c] = 0;
            }
        }
    }
}
//Przycisk pokaz rozwiazanie, 0 punktow, brak zapisu wyniku
function showSolution() {
    optionsButton.classList.add("hide");
    backToMenu.classList.remove("hide");
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let solution = getSolution(difficulty);
            let tile = document.getElementById(String(r) + String(c));
            if (tile.innerText == "") {
                tile.classList.add("revealedNumber");
            }
            tile.innerText = String(solution[r][c]);
        }
    }
    score = 0;
}
