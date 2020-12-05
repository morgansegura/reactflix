import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid =
        firstName === "" ||
        emailAddress === "" ||
        password === "" ||
        password !== confirmPassword;

    const handleSignup = event => {
        event.preventDefault();
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={event => handleSignup} action="POST">
                        <Form.Input
                            type="text"
                            placeholder="First Name"
                            onChange={({ target }) =>
                                setFirstName(target.value)
                            }
                        />
                        <Form.Input
                            type="email"
                            placeholder="Email Address"
                            onChange={({ target }) =>
                                setEmailAddress(target.value)
                            }
                        />
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Input
                            type="passwordConfirmation"
                            placeholder="Confirm Password"
                            autoComplete="off"
                            onChange={({ target }) =>
                                setConfirmPassword(target.value)
                            }
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Join
                        </Form.Submit>
                        <Form.Text>
                            Already a user?{" "}
                            <Form.Link to="/signin">Sign in now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}
