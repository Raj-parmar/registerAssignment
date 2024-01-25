export const constants = {
  error: {
    required: 'This field is required.',
    valid_email: 'Please, enter valid email address.',
    password_length: 'Password should be 12 character.',
    valid_phone_number: 'Please, Enter valid phone number.',
    valid_number: 'Please, enter valid number.',
    valid_amount: 'Please, enter valid amount.',
    valid_list_price: 'Please, enter valid list price.',
    valid_images: 'Please, select file types of PNG or JPG or PDF.',
    valid_name: 'Please, enter valid name.',
    valid_role_name: "Please, enter valid name and you can't use special character.",
    valid_skucode: "Please, enter valid code.",
    same_product: "Please, Select another product.",
    valid_password: "The entered Password is invalid",
    valid_zip: "Please, enter valid zip code",
    valid_quantity: "Please, enter valid quantity",
    valid_cost: "Please, enter valid cost",
    valid_visa_card: "Please enter 13 or 16 digits for your Visa Card.",
    valid_master_card: "Please enter 16 digits for your Master Card.",
    valid_american_card: "Please enter 15 digits for your American Express Card.",
    valid_check: "Please enter digits.",
    valid_cnfpassword : "Password didn't match please enter again.",
    valid_invoice : 'Please, enter valid invoice number.'
  },
  pattern:{
    name: "^['A-Z a-z() s-]*$",
    zipcode: "^[a-z A-Z0-9]*$",
    phone: '^[-+() 0-9]*$',
    email: /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,}?)+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%*#!&])[A-Za-z\d@$%*#!&]{12,18}$/,
    cardnumber: '^((\\+-?)|0)?[0-9]*$'
  }
};
export const getSubDomainName = window.location.hostname.split('.').slice(-2).join('.');