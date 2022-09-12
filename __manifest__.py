# -*- coding: utf-8 -*-
{
    'name': 'Google Translator',
    'version': '15.0.1.0.0',
    'summary': """
    Automatic translation to single/all languages for a translatable field in Odoo.
    """,
    'description': """
    Automatic translation to single/all languages for a translatable field in Odoo.
    """,
    'category': 'All',
    'author': 'Simplify-ERP™',
    'website': 'https://simplify-erp.com',
    'license': 'GPL-2',
    'depends': ['web', 'simplify_translation_dialog'],
    'assets': {
        'web._assets_common_scripts': [
            'simplify_google_translator/static/src/js/google.js'
        ]
    },
    'external_dependencies': {
        'python': ['googletrans']
    },
}
