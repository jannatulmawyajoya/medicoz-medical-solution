import React from 'react';
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div className="contact-div">
            <h1 className="mb-5">Write Us a Message!!!</h1>

            <div className="row">
                <div className="col-lg-4">
                    <h3 className="text-primary">Address</h3>
                    <p>185, Pickton Near Street,
                        Los Angeles, USA</p>
                </div>
                <div className="col-lg-4">
                    <h3 className="text-primary">Phone</h3>
                    <p>(+92) 313 888 000 </p>
                

                      <p>  (+92) 313 999 000</p>

                </div>
                <div className="col-lg-4">
                    <h3 className="text-primary">Email</h3>
                    <p>support@example.com</p>
                    <p>help@example.com</p>

                </div>

                <div className="mx-auto w-50 form-div">
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Password</label>
                            <input type="password" class="form-control" id="inputPassword4"/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity"/>
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="inputZip"/>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                <label class ="form-check-label" for="gridCheck">
                                Check me out
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;