'use strict';

module.exports = {
  /**
   * padding
   * Handler padding
   * @param {any} data
   * @param {any} length
   * @returns {string}
   */
  padding(data, length) {
    data += '';
    const pad = ' ';
    const diff = Math.abs(data.length - length);
    const padLength = Math.floor(diff / pad.length);

    return `${data}${pad.repeat(padLength)}`;
  },
  /**
   * columnWidthHandler
   * Handle max width of each column
   * @param {any} dataArray
   * @param {any} columns
   * @returns {object} maxWidth
   */
  columnWidthHandler(dataArray, columns) {
    const maxWidth = {};
    columns.map(column => maxWidth[column] = column.length || 0);
    dataArray.map((data) => {
      columns.map((column) => {
        let dataLength = typeof data[column] === 'string' ? data[column].length : data[column].toString().length;
        maxWidth[column] = dataLength > maxWidth[column] ? dataLength : maxWidth[column];
      })
    });

    return maxWidth;
  },
  /**
   * reorderDataWithHeader
   * Reorder data object with header
   * @param {any} data
   * @param {any} header
   * @returns {objec} data
   */
  reorderDataWithHeader(data, header) {
    const newData = {};
    header.map(h => newData[h] = data[h]);
    return newData;
  },
  /**
   * getHeaderFromData
   * Get header array from properties of data object
   * @param {any} data
   * @returns {array} header
   */
  getHeaderFromData(data) {
    return typeof data === 'object' ? Object.keys(data[0]) : Object.keys(data);
  }
};