import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function ResetPasswordPage() {
    const navigate = useNavigate()
    
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const resetPassword = async () => {
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match!")
            return;
        }

        try {
            const response = await fetch("/api/reset-password", {
                method: "POST",
                body: JSON.stringify({ newPassword }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await response.json()

            if (response.ok) {
                setMessage(data.message || "Password reset successfully.")
                navigate('/login')
            } else {
                setError(data.error || "Error resetting password.")
            }
        } catch (error) {
            setError("An error occurred. Please try again later.")
        }
    }

    return (
        <div>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2 className="text-center">Reset Password</h2>

                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}

                        <Form onSubmit={e => {
                            e.preventDefault()
                            resetPassword()
                        }}>
                            <Form.Group className="mb-3" controlId="newPassword">
                                <Form.Label>New Password:</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Enter new password" 
                                    value={newPassword} 
                                    onChange={e => setNewPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="confirmPassword">
                                <Form.Label>Confirm New Password:</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Confirm new password" 
                                    value={confirmPassword} 
                                    onChange={e => setConfirmPassword(e.target.value)}
                                />
                            </Form.Group>

                            <div className="d-grid gap-2">
                                <Button variant="primary" type="submit">
                                    Reset Password
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ResetPasswordPage