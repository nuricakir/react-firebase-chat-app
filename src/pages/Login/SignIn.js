import { Box, Card } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { useUserAuth } from "../../context/userAuthContext";
import "./SignIn.css";

export default function SignIn() {
  const { googleSignInWithPopup, user, detectMob, googleSignIn } =
    useUserAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e, provider) => {
    e.preventDefault();
    if (detectMob()) {
      try {
        switch (provider) {
          case "google":
            await googleSignIn();
            navigate("/chat");
            break;
          default:
            break;
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      try {
        switch (provider) {
          case "google":
            await googleSignInWithPopup();
            break;
          default:
            break;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/chat");
    }
    // eslint-disable-next-line
  }, [user]);

  const card = (
    <React.Fragment>
      <div>
        <div
          className="google-btn"
          role={"button"}
          onClick={(e) => handleSignIn(e, "google")}
        >
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google"
            />
          </div>
          <p className="btn-text">
            <b>Login with Google</b>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
  return (
    <Layout sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          padding: "16px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          inset: "0px",
          maxWidth: "480px",
          overflowY: "auto",
          background: "rgba( 255, 255, 255, 0.4 )",
          backdropFilter: "blur( 5px )",
          WebkitBackdropFilter: "blur( 5px )",
          borderRadius: "10px",
          width: "100%",
          margin: "auto",
        }}
      >
        <Card variant="elevation" sx={{ width: "100%" }}>
          {card}
        </Card>
      </Box>
    </Layout>
  );
}
