import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newslatter } from "./NewsLatter";


export const MailchimpForm = () => {
  const postUrl =  "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e";
  return (
    <>
       <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <Newslatter
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
    </>
  )
}
