import React from 'react';
import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Contact from './Contact';
const Mail = props => {
    return (
        <div className="mc__form-container">
            
<MailchimpSubscribe
url={"https://us11.list-manage.com/contact-form?u=e29e05c337068f3198e81cb13&form_id=d5daaf4d1407c670d2061cb5a0e0f75f"}
render={({ subscribe, status, message }) => (
    <Contact
        status={status} 
        message={message}
        onValidated={formData => subscribe(formData)}
  
/>
)}
/>
        </div>
    );
};

export default Mail;