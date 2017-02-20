'use strict';

const handler = require('./handler');

/**
 * Drawer
 *
 * @class Drawer
 */
class Drawer {
  /**
   * Creates an instance of Drawer.
   *
   * @param {any} data
   * @param {any} header
   *
   * @memberOf Drawer
   */
  constructor(data, header) {
    this.headerArray = header || handler.getHeaderFromData(data);
    this.dataArray = data;
    this.columnWidth = handler.columnWidthHandler(this.dataArray, this.headerArray);
  }
  /**
   * Draw table
   *
   * @returns {string} table
   *
   * @memberOf Drawer
   */
  draw() {
    const output = [];
    const headerRow = this.header();
    const dataRows = this.data();
    const upperLine = this.line(headerRow.length, true);
    const splitLine = this.line(headerRow.length, false);
    const baseLine = this.line(headerRow.length, true);

    output.push(upperLine);
    output.push(headerRow);
    output.push(splitLine);
    dataRows.map(row => output.push(row));
    output.push(baseLine);

    return output.join('\n');
  }
  /**
   * Generate header row
   *
   * @returns {string} header
   *
   * @memberOf Drawer
   */
  header() {
    return this.headerArray.reduce((a, h) => `${a} ${handler.padding(h, this.columnWidth[h])} |`, '|');
  }
  /**
   * Generate data row
   *
   * @returns {string} data
   *
   * @memberOf Drawer
   */
  data() {
    var newDataArray = [];
    this.dataArray.map((data) => {
      var tmp = '';
      this.headerArray.map((header) => {
        data = handler.reorderDataWithHeader(data, this.headerArray);
        tmp += ` ${handler.padding(data[header], this.columnWidth[header])} |`;
      });
      newDataArray.push(`|${tmp}`);
    });
    return newDataArray;
  }
  /**
   * Generate line
   *
   * @param {any} length
   * @param {any} corner Generate line with corner '+' or not
   * @returns {string} line
   *
   * @memberOf Drawer
   */
  line(length, corner) {
    return corner ? `+${'-'.repeat(length - 2)}+`
      : '-'.repeat(length);
  }
}

module.exports = Drawer;