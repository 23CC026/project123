import React from 'react'

const page = () => {
  return (
    <div className="contact-container">
      <div className="contact-form-wrapper">
        <div className="contact-form-box">
          <form className="contact-form">
            <h1 className="contact-form-title">Fill out the form to reach us !</h1>
            <input className="contact-input" placeholder="Enter your Email" />
            <input className="contact-message" placeholder="Enter your message" />
            <button className="contact-submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="contact-info">
        <table>
          <tbody>
            <tr>
              <td className="contact-info-label">Email</td>
              <td><p className="contact-info-value">message@foodapp.com</p></td>
            </tr>
            <tr>
              <td className="contact-info-label">Twitter</td>
              <td><p className="contact-info-value">@foodappOfficial</p></td>
            </tr>
            <tr>
              <td className="contact-info-label">Instagram</td>
              <td><p className="contact-info-value">@foodappOfficial</p></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page