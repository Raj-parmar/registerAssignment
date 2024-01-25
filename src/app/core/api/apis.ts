export const apiUrls = {
  auth:{
    login: 'api/login',
    logout: 'api/logout',
    add_user: 'api/register',
    reset_password: 'api/reset-password',
    forgot_password: 'api/forgot-password',
    sent_forgot_password_link: 'api/send-forgot-password-link',
    reset_expired_password: 'api/reset-expired-password'
  },
  userDetails:{userDetails: 'api/get-users-roles-permissions-modules'},
  user_list: {
    user_list: 'api/get-all-users',
    user_list_add: 'api/register',
    user_list_update: 'api/update-user',
    user_list_delete: 'api/delete-user',
    user_list_status: 'api/change-user-status'
  },
  role_list: {
    role_list: 'api/get-all-roles',
    role_list_add: 'api/create-role',
    role_list_update: 'api/update-role',
    role_list_delete: 'api/delete-role'
  },
  user_activity_List: {
    list: 'api/get-user-activity'
  },
  lock_user_list: {
    list: 'api/get-locked-users',
    unlock_user: 'api/unlock-user'
  },
  role_access:{
    module_list: 'api/get-all-modules',
    available_permission: 'api/get-permissions-of-module',
    role_permission: 'api/get-permissions-of-role',
    role_permissoin_by_module: 'api/get-permissions-of-role-by-module',
    assign_permission: 'api/assign-permission-to-role',
    remove_permission: 'api/remove-permission-from-role'
  },
  productCatalogue:{
    category: {
      list:'api/get-all-categories',
      add: 'api/create-categories',
      update: 'api/update-categories',
      delete: 'api/delete-categories',
      icon_list: 'api/get-all-icons',
      status_update: 'api/change-status-categories'
    },
    product:{
        list: 'api/get-all-products',
        add: 'api/create-products',
        update: 'api/update-products',
        delete: 'api/delete-products',
        status_update: 'api/change-status-products',
        formats: 'api/get-all-formats'
    },
    product_material:{
      list: 'api/get-product-materials',
      add: 'api/add-product-materials',
      update: 'api/update-product-material',
      status_update: 'api/change-status-product-material'
    },
    product_event:{
      list: 'api/get-product-event',
      add: 'api/add-product-event',
      update: 'api/update-product-event',
      delete: 'api/delete-product-event',
      status_update: 'api/change-status-product-event'
    },
    sub_product:{
      list: 'api/get-all-subproducts',
      add: 'api/create-subproducts',
      update: 'api/update-subproducts',
      delete: 'api/delete-subproducts',
      status_update: 'api/change-status-subproducts'
    },
    complementary_product:{
      list: 'api/get-complimentary-product',
      assign: '/api/assign-complimentary-product',
      update: 'api/update-complimentary-product',
      delete: 'api/delete-complimentary-product',
      status_update: 'api/change-status-complimentary-product'
    },
    format_list: {
      add: 'api/create-product-format',
      update: 'api/update-product-format',
      delete: 'api/delete-product-format',
      status: 'api/change-status-format'
    },
  },
  online_support:{
    ticket_list:'api/get-support-tickets',
    staff_list: 'api/get-support-staff',
    problem_type: 'api/get-problem-types',
    delete: 'api/delete-support-tickets',
    update: 'api/update-support-tickets',
    ticket_comment: 'api/get-support-tickets-comments',
    create_ticket_comment: 'api/create-support-tickets-comments',
    export: 'api/export-support-tickets-csv'    
  },
  purchases:{
    list:'api/get-purchases',
    get_all_users_by_role: 'api/get-all-users-by-role',
    carriers: 'api/get-all-carriers',
    delete: 'api/delete-purchases',
    updateTrackingDetails: 'api/update-purchases-tracknum',
    updateInvoiceDetails: 'api/update-invoice-details',
    export_purchase_csv: 'api/export-purchase-csv',
    export_new_sales_csv: 'api/export-new-sales-csv',
    export_world_ups_csv: 'api/export-world-ups-csv',
    export_invoice_csv: 'api/export-invoice-csv',
    export_combine_invoice_doc: 'api/export-combine-invoice-doc',
    export_invoice_doc: 'api/export-invoice-doc',
    export_pdf_receipt: 'api/export-receipt'
  },
  membership:{
    list:'api/get-members',
    add:'api/create-new-member',
    update:'api/update-member',
    export:'api/export-members-csv',
    getParticularMemberDetails: 'api/get-member-details',
    loginClientSite: 'api/get-member-login',
    net_terms_list:'api/get-net-terms'
  },
  manual_transactions:{
    list:'api/get-products-of-mt',
    add_to_cart: 'api/add-to-cart-of-mt',
    get_cart_details: 'api/get-cart-of-mt',
    getMSAIList: 'api/get-member-shipping-address-info',
    addMSAI: 'api/add-member-shipping-address-info',
    updateMSAI: 'api/update-member-shipping-address-info',
    deleteMSAI: 'api/delete-member-shipping-address-info',
    getMBAIList: 'api/get-member-billing-address-info',
    defaultMSAI: '/api/update-member-shipping-default-address',
    defaultMBAI: '/api/update-member-billing-default-address',
    addMBAI: 'api/add-member-billing-address-info',
    updateMBAI: 'api/update-member-billing-address-info',
    deleteMBAI: 'api/delete-member-billing-address-info',
    staff: 'api/get-created-by-staff',
    checkout: 'api/checkout-products',
    createMemberAccount:'api/create-member-account',
    deleteSession: 'api/remove-from-cart-of-mt',
    getRateOfShipping: 'api/get-rate-of-shipping',
    submitShippingDetails: 'api/add-shipping',
    taxDetails: 'api/calculate-tax',
    checkOrderExist: 'api/check-order-exist',
    eqGroupsList: 'api/get-eq-groups',
    manageAssessment : '/api/get-assessment-link'
  },
  quote_history:{
    list:'api/get-quote-purchases',
    carriers: 'api/get-all-carriers',
    delete: 'api/delete-quote-purchases',
    enableProcess: 'api/enable-process',
    editQuoteDetails: 'api/edit-quote-details',
    download: 'api/download-quote',
    processQuote:'api/process-quote'
  },
  order_history:{
    list : '/api/order-history',
    details : '/api/view-receipt',
    
  },
  headers: {
    top_menu: '/api/get-top-menu',
    main_menu: 'api/get-main-menu',
    footer_menu: 'api/get-footer-menu'
  },
  checkout:{
    add_to_cart:'api/add-to-cart',
    get_cart_details: 'api/get-cart',
    remove_items: 'api/remove-from-cart',
    reset_items: 'api/reset-cart',
    payment_details: 'api/secure-checkout',
    checkout: 'api/checkout',
    checkOrderExist : 'api/check-order-exist',
    downloadReceipt : 'api/download-purchase-receipt'
  },
  account_info :{
    list : '/api/get-profile',
    edit : '/api/edit-profile'
  },
  teameq_diagnostic :{
    addTeamEq : '/api/teameq-diagnostic'
  },
  assessment_resources :{
    list : '/api/resources-assessment',
    details : '/api/get-assessment-resourses',
    faq : '/api/faq'
  },
  payment :{
    get_payment : '/api/get-invoice-quote-details',
    make_payment : '/api/make-invoice-quote-payment'
  },
  ctr:{
    teamDetails : '/api/get-ctr-teams',
    policingDetails : '/api/get-ctr-policing',
    hiringDetails : '/api/get-ctr-hiring',
    languageDetails : '/api/get-ctr-language',
    MainPageDetails :'/api/get-ctr-headerfooter',
    level1 : '/api/get-ctr-level1',
    level219 : '/api/get-ctr-level2-2019',
    level222 : '/api/get-ctr-level2-2022',
    getMemberDetails : '/api/get-member-full-details'
  },
  eq_forms:{
    eqPlan : '/api/eqplan',
    certificatiOnCompletion : '/api/certificationcompletion',
    eqPlan_team : '/api/eqplan-team'
  }
  
};

