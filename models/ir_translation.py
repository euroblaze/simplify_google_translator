# -*- coding: utf-8 -*-
# Part of Simplify-ERP™. See LICENSE file for full copyright and licensing details.

from googletrans import Translator
from odoo import models, api, fields, _


class IrTranslation(models.Model):
    _inherit = 'ir.translation'

    @api.model
    def get_google_translation(self, languages, word):
        google_translator = Translator()
        translations = []
        for lang in languages:
            try:
                translation = google_translator.translate(word, dest=lang[0])
                translations.append(translation.text)
            except Exception:
                translations.append(lang[1])
        return translations
