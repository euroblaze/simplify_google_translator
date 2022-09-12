# -*- coding: utf-8 -*-
{
    'name': 'Google Translator',
    'version': '14.0.1.0.0',
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
    'data': [
        'views/assets.xml'
    ],
    'external_dependencies': {
        'python': ['googletrans']
    },
}
