import { MASTER_GROUP, LEGAL_ENTITY_LEBI, BULK_UPLOAD } from "./constant";

export const dataService = {
    getForm,
    getFormData,
};

function getFormData() {
    const formData = {
        'value': {
            'clientSearchType': '',
            'searchParams': [],
            'codiTableClientSearch': []
        },
        'data': {
            'codiTableClientSearch': [],
            'selectedClientSearchData': []
        }
    }

    return formData
}

export const masterGrpOptions = [
    {
        field: 'any',
        term: 'Any'
    },
    {
        field: 'mastergrpname',
        term: 'Master Group'
    },
    {
        field: 'mastergrpid',
        term: 'Master Group Id'
    }
];

export const legalEntityOptions = [
    {
        field: 'any',
        term: 'Any'
    },
    {
        field: 'legalentity',
        term: 'Legal entity'
    },
    {
        field: 'grid',
        term: 'GRID'
    }
];


function getForm() {
    const formJson = {
        'components': [
            {
                'id': 'CLIENT_SEARCH_SECTION',
                'uqKey': 'clientSearchSection',
                'isReadonly': false,
                'show': true,
                'isDisabled': false,
                'parentId': null,
                'type': 'grid',
                'child': {
                    'components': [
                        {
                            'id': 'CLIENT_SEARCH_SECTION_GRID',
                            'uqKey': 'clientSearchSectionGrid',
                            'isReadonly': false,
                            'show': true,
                            'isDisabled': false,
                            'parentId': null,
                            'type': 'gridItem',
                            'child': {
                                'components': [
                                    {
                                        'id': 'CLIENT_SEARCH_TYPE',
                                        'uqKey': 'clientSearchType',
                                        'label': '',
                                        'show': true,
                                        'isDisabled': false,
                                        'parentId': 1,
                                        'className': '',
                                        'type': 'radioButton',
                                        'options': [
                                            {
                                                label: MASTER_GROUP,
                                                id: '1'
                                            },
                                            {
                                                label: LEGAL_ENTITY_LEBI,
                                                id: '2'
                                            }
                                        ]
                                    },
                                    {
                                        'id': 'CLIENT_SEARCH_CHIP_MASTER_GRP',
                                        'uqKey': 'searchChipMasterGrp',
                                        'placeholder': '',
                                        'label': '',
                                        'isReadonly': false,
                                        'show': true,
                                        'isDisabled': true,
                                        'size': 's3',
                                        'variant': 'h2',
                                        'section': true,
                                        'fontWeight': 'medium',
                                        'parentId': null,
                                        'type': 'searchChip',
                                        'options': []
                                    },
                                    {
                                        'id': 'CLIENT_SEARCH_NOTIFICATION',
                                        'uqKey': 'notificationClientSearch',
                                        'show': true,
                                        'parentId': null,
                                        'type': 'localComponent',
                                        'primaryMessage': '',
                                        'secondaryMessage': '',
                                        'notificationType': ''
                                    }
                                ]
                            }
                        },
                    ]
                }
            },
            {
                'id': 'BULK_UPLOAD',
                'uqKey': 'bulkUpload',
                'show': false,
                'parentId': null,
                'type': 'bulkUpload',
                'showWhen': {
                    'dataKey': 'casesubmissionType',
                    'contains': [BULK_UPLOAD],
                    'then': {
                        'show': true
                    },
                    'else': {
                        'show': false
                    }
                }
            },
            {
                'id': 'CLIENT_SEARCH_CHIP_DATA_TABLE',
                'uqKey': 'codiTableClientSearch',
                'label': null,
                'show': false,
                'isDisabled': true,
                'isReadOnly': true,
                'parentId': 1,
                'position': 'fixed',
                'type': 'codiTable',
                'itemsPerPage': 10,
                'itemOptions': [10, 20],
                'loading': false,
                'selectType': 'radio',
                'rowIdentifier': 'mastergrpid',
                'noMatchingMessage': 'No data found',
                'scrollable': true,
                'checkboxTable': false,
                'showTablePagination': true,
                'showWhen': {
                    'dataKey': 'clientSearchType',
                    'contains': [MASTER_GROUP],
                    'then': {
                        'show': true
                    },
                    'else': {
                        'show': false
                    }
                },
                'columns': [
                    {
                        'id': 'CLIENT_SRCH_DATA_TABLE_MG_NAME',
                        'uqKey': 'mastergrpid',
                        'show': true,
                        'displayHeaderValue': 'MG ID',
                        'position': 1,
                        'type': 'number',
                        'colWidth': '7%',
                        'sort': true,
                        'sortOrder': 'asc',
                        'ascOrder': true,
                        'cellType': 'radio'
                    },
                    {
                        'id': 'CLIENT_SRCH_DATA_TABLE_MG_ID',
                        'uqKey': 'mastergrpname',
                        'show': true,
                        'displayHeaderValue': 'Master Group',
                        'position': 2,
                        'type': 'text',
                        'colWidth': '25%',
                        'sort': false,
                        'sortOrder': null,
                        'ascOrder': false,
                    },
                    {
                        'id': 'CLIENT_SRCH_DATA_TABLE_GRB',
                        'uqKey': 'gblrelationshipmgrname',
                        'show': true,
                        'displayHeaderValue': 'GRB',
                        'position': 3,
                        'type': 'text',
                        'colWidth': '8%',
                        'sort': false,
                        'sortOrder': null,
                        'ascOrder': false,
                    },
                    {
                        'id': 'CLIENT_SRCH_DATA_TABLE_MG_COUNTRY',
                        'uqKey': 'principlecountry',
                        'show': true,
                        'displayHeaderValue': 'MG Country',
                        'position': 4,
                        'type': 'text',
                        'colWidth': '10%',
                        'sort': true,
                        'sortOrder': null,
                        'ascOrder': false,
                    }
                ]
            },
            {
                'id': 'LEBI_CHIP_DATA_TABLE',
                'uqKey': 'codiTableClientSearch',
                'label': null,
                'show': false,
                'isDisabled': true,
                'isReadOnly': true,
                'parentId': 1,
                'position': 'fixed',
                'type': 'codiTable',
                'itemsPerPage': 10,
                'itemOptions': [10, 20],
                'loading': false,
                'selectType': 'checkbox',
                'rowIdentifier': 'grid',
                'noMatchingMessage': 'No data found',
                'scrollable': true,
                'checkboxTable': true,
                'showTablePagination': true,
                'showWhen': {
                    'dataKey': 'clientSearchType',
                    'contains': [LEGAL_ENTITY_LEBI],
                    'then': {
                        'show': true
                    },
                    'else': {
                        'show': false
                    }
                },
                'columns': [
                    {
                        'id': 'LEBI_SRCH_DATA_TABLE_GRID',
                        'uqKey': 'grid',
                        'show': true,
                        'displayHeaderValue': 'GRID',
                        'position': 1,
                        'type': 'text',
                        'colWidth': '7%',
                        'sort': false,
                        'sortOrder': null,
                        'ascOrder': true,
                        'cellType': 'checkbox'
                    },
                    {
                        'id': 'LEBI_SRCH_DATA_TABLE_LEGAL_ENTITY',
                        'uqKey': 'legalentity',
                        'show': true,
                        'displayHeaderValue': 'Legal Entity',
                        'position': 2,
                        'type': 'text',
                        'colWidth': '15%',
                        'sort': true,
                        'sortOrder': 'asc',
                        'ascOrder': true,
                    },
                    {
                        'id': 'LEBI_SRCH_DATA_TABLE_MASTER_GROUP',
                        'uqKey': 'masterGroup',
                        'show': true,
                        'displayHeaderValue': 'Master Group',
                        'position': 3,
                        'type': 'text',
                        'colWidth': '15%',
                        'sort': true,
                        'sortOrder': 'asc',
                        'ascOrder': true,
                    },
                    {
                        'id': 'LEBI_SRCH_DATA_TABLE_BOOKING_COUNTRY',
                        'uqKey': 'bookingcountry',
                        'show': true,
                        'displayHeaderValue': 'Booking Country',
                        'position': 4,
                        'type': 'text',
                        'colWidth': '10%',
                        'sort': true,
                        'sortOrder': 'asc',
                        'ascOrder': true,
                    },
                    {
                        'id': 'LEBI_SRCH_DATA_TABLE_GRB',
                        'uqKey': 'grb',
                        'show': true,
                        'displayHeaderValue': 'GRB',
                        'position': 5,
                        'type': 'text',
                        'colWidth': '7%',
                        'sort': false,
                        'sortOrder': null,
                        'ascOrder': false,
                    },
                    {
                        'id': 'LEBI_SRCH_DATA_TABLE_RM',
                        'uqKey': 'rm',
                        'show': true,
                        'displayHeaderValue': 'RM',
                        'position': 6,
                        'type': 'text',
                        'colWidth': '7%',
                        'sort': true,
                        'sortOrder': 'asc',
                        'ascOrder': true,
                    },
                    {
                        'id': 'LEBI_SRCH_DATA_TABLE_COUNTRY_OF_INCORPORATION',
                        'uqKey': 'countryofincorp',
                        'show': true,
                        'displayHeaderValue': 'Country of Incorporation',
                        'position': 7,
                        'type': 'text',
                        'colWidth': '10%',
                        'sort': true,
                        'sortOrder': null,
                        'ascOrder': false,
                    }
                ]
            }
        ]
    }

    return formJson;
}
