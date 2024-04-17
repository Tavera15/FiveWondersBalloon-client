import React from "react";
import "./HireUsPage.css"

function HireUsPage()
{
    return(
        <div className="container col-md-8 col-xl-4 p-4 form-container">
            <form className="needs-validation" novalidate>
                <div className="mb-3">
                    <label for="validationCustom01">Name</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="Name" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="form-row flex-row-wrap flex-center">
                    <div className="col-12 col-md-5 mb-3">
                        <label for="validationCustom02">Phone Number</label>
                        <input type="text" className="form-control" id="validationCustom02" placeholder="000-000-0000" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-0 offset-md-2"></div>
                    <div className="col-12 col-md-5 mb-3">
                        <label for="validationCustomUsername">Email</label>
                        <div className="input-group">
                            <input type="email" className="form-control" id="validationCustomUsername" placeholder="Email" aria-describedby="inputGroupPrepend" required />
                            <div className="invalid-feedback">
                            Please enter email.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-col">
                    <div className="mb-3">
                        <label for="validationCustom06">Address Line 1</label>
                        <input type="text" className="form-control" id="validationCustom06" placeholder="" required />
                        <div className="invalid-feedback">
                            Please provide a valid address.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="validationCustom07">Address Line 2</label>
                        <input type="text" className="form-control" id="validationCustom07" placeholder="" />
                    </div>
                </div>
                    <div className="mb-3">
                    <label for="validationCustom03">City</label>
                    <input type="text" className="form-control" id="validationCustom03" placeholder="City" required />
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                    </div>
                <div className="form-row flex-row-wrap flex-center">
                    <div className="col-12 col-md-5 mb-3">
                    <label for="validationCustom04">State</label>
                    <input type="text" className="form-control" id="validationCustom04" placeholder="State" required />
                    <div className="invalid-feedback">
                        Please provide a valid state.
                    </div>
                    </div>
                    <div className="col-0 offset-md-2"></div>
                    <div className="col-12 col-md-5 mb-3">
                    <label for="validationCustom05">Zip</label>
                    <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="validationCustom08">Event Date</label>
                    <input type="date" className="form-control" id="validationCustom08" placeholder="7/10/2024" required />
                    <div className="invalid-feedback">
                        Please provide an event date.
                    </div>
                </div>
                <div className="mb-3">
                    <label for="validationCustom09">Details</label>
                    <textarea type="text" className="form-control" id="validationCustom09" placeholder="" />
                </div>
                <button className="btn btn-primary" type="submit">Submit form</button>
            </form>
        </div>
    );
}

export default HireUsPage;