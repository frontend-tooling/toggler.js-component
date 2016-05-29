(function (global, factory) {
  if(typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else if(typeof define === 'function' && define.amd) {
    define('toggler', ['jQuery'], factory);
  } else {
    global.toggler = factory(global.jQuery);
  }
})(this, function($) {

  function init() {
    $('[data-toggle]').each(function(idx, el) {
      var $el = $(el);
      var $target = $($el.data('toggle'));
      $el.on('click', function(e) {
        e.preventDefault();
        if($target.attr('hidden')) {
          $target.removeAttr('hidden');
        } else {
          $target.attr('hidden', true);
        }
      });
    });
  }

  return {
    init: init
  }

});
