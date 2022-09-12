odoo.define('simplify_google_translator.Google', function (require) {
  'use strict';

  var translationDialog = require('web.TranslationDialog');
  var core = require('web.core');
  var Dialog = require('web.Dialog');

  var _t = core._t;

  translationDialog.include({
    xmlDependencies: (translationDialog.prototype.xmlDependencies || [])
    .concat(['/simplify_translation_dialog/static/src/xml/translate_dialog.xml']),
    events: _.extend({}, translationDialog.prototype.events, {
      'click .google_one': 'googleOne'
    }),

    init: function (parent, options) {
      if (this.third_party_buttons == undefined) {
        this.third_party_buttons = [];
      }
      var google = {'module': 'simplify_google_translator', 'action': 'google_one', 'logo': 'google_logo.png'};
      this.third_party_buttons.push(google);
      this._super.apply(this, arguments);
      this.buttons.splice(1, 0, { text: _t('Google'), classes: 'btn-primary', close: false, click: this.googleAll.bind(this) });
    },

    googleOne: function (event) {
      var $el = $(event.currentTarget);
      var term = $el.attr('term').split('_')[1];
      var value = $el.attr('value');
      var languages = [[term, value]];
      var word = this.userLanguageValue;
      this._rpc({
        model: 'ir.translation',
        method: 'get_google_translation',
        args: [languages, word]
      }).then(function (translations) {
        $el.parent().find('input, textarea').val(translations[0]);
      });
    },

    googleAll: function () {
      var self = this;
      var languages = [];
      var word = this.userLanguageValue;
      this.el.querySelectorAll('input[type=text],textarea').forEach((t) => {
        var initialValue = this.data.find((d) => d.id == t.dataset.id);
        languages.push([initialValue.lang.split('_')[1], initialValue.value]);
      });
      this._rpc({
        model: 'ir.translation',
        method: 'get_google_translation',
        args: [languages, word]
      }).then(function (translations) {
        var counter = 0;
        self.el.querySelectorAll('input[type=text],textarea').forEach((t) => {
          $(t).val(translations[counter]);
          counter++;
        });

      });
    }

  });

});