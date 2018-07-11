;(function (window, document, undefined) {
  var TimeShowPlugin = function () {
    this.init();
  }
    TimeShowPlugin.prototype = {
      constructor: TimeShowPlugin,
      init: function () {
        var d = new Date(),
        year = d.getFullYear(),
        month = d.getMonth() + 1,
        date = d.getDate(),
        hour = d.getHours(),
        minute = d.getMinutes(),
        second = d.getSeconds();
        if(year < 10) {
          year = '0' + year;
        }
        if(month < 10) {
          month = '0' + month;
        }
        if(date < 10) {
          date = '0' + date;
        }
        if(hour < 10) {
          hour = '0' + hour;
        }
        if(minute < 10) {
          minute = '0' + minute;
        }
        if(second < 10) {
          second = '0' + second;
        }
        return year + "-" + month + "-" + date + " " +  hour + ":" + minute + ":" + second;
      }
    }
  window.TimeShowPlugin = TimeShowPlugin;
} (window,document));