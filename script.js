function Grid(rows, columns, cellHeight, cellWidth, gridElement) {
    this.rows = rows
    this.columns = columns
    this.cellHeight = cellHeight
    this.cellWidth = cellWidth

    this.element = gridElement;
    this.gridArray = []

    this.fillGrid()
}

Grid.prototype.fillGrid = function () {
    for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
        this.gridArray.push([]) // push empty row array to grid
        const rowElement = document.createElement("div")
        rowElement.classList.add("row") // Add row class to row element 
        rowElement.style.height = this.cellHeight + "px"
        this.element.appendChild(rowElement) // Append row element to grid element

        for (let colIndex = 0; colIndex < this.columns; colIndex++) {
            const cell = new Cell(rowIndex, colIndex, this.cellHeight, this.cellWidth) // create a new cell instance
            rowElement.appendChild(cell.element) // append cell element to row element
            this.gridArray[rowIndex].push(cell) // add the new cell instance to the row array
            console.log(grid)
        }
    }
}

function Cell(rowIndex, colIndex, height, width) {
    this.rowIndex = rowIndex
    this.colIndex = colIndex
    this.height = height
    this.width = width

    this.createElement()
    

}

Cell.prototype.createElement = function () {
    this.element = document.createElement("div");
    this.element.classList.add("cell") // Add cell class to column element
    this.element.dataset.rowIndex = this.rowIndex
    this.element.dataset.colIndex = this.colIndex 
    this.element.style.height = this.height + "px"
    this.element.style.width = this.width + "px" 
}

const grid1 = new Grid(10, 10, 30, 30, document.getElementById("grid"))
const grid2 = new Grid(5, 5, 10, 10, document.body)
