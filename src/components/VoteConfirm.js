import React from "react";
import { Card, Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

export default function ConfirmVote() {
  const navigate = useNavigate();

  // Handler for Confirm button
  const handleConfirm = () => {
    // Logic for submitting the vote goes here
    console.log("Vote submitted");
    // Optionally navigate to a success page or show a success message
    navigate("/submission-success"); // Adjust the route as per your app
  };

  // Handler for Cancel button
  const handleCancel = () => {
    // Navigate back to the previous page (voting page)
    navigate(-1);
  };

  return (
    <div className="confirm-vote-page">
      <Card
        title="Confirm Your Vote"
        style={{
          margin: "20px auto",
          width: "50%",
          borderRadius: "15px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          textAlign: "center",
        }}
      >
        <p>
          Are you sure you want to submit your vote? It cannot be changed after
          the submission.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {/* Confirm Button */}
          <Button type="primary" onClick={handleConfirm}>
            Confirm
          </Button>

          {/* Cancel Button */}
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      </Card>
    </div>
  );
}