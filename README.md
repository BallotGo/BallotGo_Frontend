# BallotGo - E-Voting Application Frontend

This repository contains the frontend for **BallotGo**, a secure e-voting application built with **React**. This application is designed to provide a seamless, secure, and user-friendly voting experience while ensuring data integrity and vote verifiability.

![](https://github.com/BallotGo/BallotGo_Frontend/blob/main/Landing-Page.png)

![](https://github.com/BallotGo/BallotGo_Frontend/blob/main/Dashboard.png)

![](https://github.com/BallotGo/BallotGo_Frontend/blob/main/Vote.png)

![](https://github.com/BallotGo/BallotGo_Frontend/blob/main/Results.png)

## Features

- **User Authentication and OTP Verification:** Allows users to securely sign in and verify their identity with OTP.
- **Candidate Selection and Vote Submission:** Provides an intuitive UI for users to select candidates and submit votes.
- **Real-Time Status Updates:** Displays voting status and confirmation upon successful vote submission.
- **Verification Screens:** Supports individual verification for users to confirm their votes.

> [Backend Repository for BallotGo](https://github.com/BallotGo/BallotGo_Backend)

## Project Overview

BallotGo’s frontend leverages React to create a dynamic, responsive voting interface. It works in conjunction with the backend’s cryptographic security measures to provide a private and transparent voting process. This client interface allows users to authenticate, vote, and verify their submissions securely.

### Key Security Techniques

1. **JWT-Based Secure User Authentication**  
   JSON Web Tokens (JWT) are used for secure user authentication and role-based management:

   - **Token Storage**: JWT is securely stored on the client side and used to validate the user’s session.
   - **Token Validation**: Tokens are validated on restricted routes, ensuring only authorized users can access sensitive areas like voting screens.

2. **OTP Verification for Identity Authentication**  
   OTP verification is implemented to add an extra layer of security:

   - **Dynamic OTP Requests**: Users can request an OTP on login or vote submission, which is verified by the backend.
   - **Time-Limited Validity**: OTPs are only valid for a short time, reducing the risk of unauthorized access.

3. **Blind Signatures and Vote Anonymity**  
   The frontend encrypts and submits votes, while blind signatures provided by the backend maintain vote anonymity and integrity.

### Additional Security Features

BallotGo’s frontend works with backend cryptographic features to ensure privacy and transparency in the voting process:

1. **End-to-End Encryption for Secure Data Transmission**  
   All data, including votes and authentication details, are encrypted during transmission to maintain confidentiality.

2. **Individual and Universal Verifiability**  
   Users can verify their vote inclusion, and third-party observers can verify the tally without accessing specific vote details.

---

## Getting Started

### Prerequisites

- **Node.js** (v14 or above)
- **Git** (optional, for cloning the repo)

### Project Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/username/ballotgo-frontend.git
   cd ballotgo-frontend
2. **Install Dependencies**
   ```bash
   npm install
3. **Run the Application**
   ```bash
   npm start

---

## Contribution

   1. > [Udara Wijesinghe](https://github.com/Udaramalinda)
   2. > [Vishvadini Kurukulasooriya](https://github.com/Zury7)
   3. > [Sanuja Edirisinghe](https://github.com/sanujaediri)

