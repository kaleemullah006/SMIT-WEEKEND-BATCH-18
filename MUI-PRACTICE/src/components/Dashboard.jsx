import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/supabaseClient";
import { useEffect, useState } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
          console.log(error);
          navigate("/signin");
        }


        if (!data.user) {
            navigate("/signin");
            return
        }


        setLoading(false);
    }

    checkUser();


  }, [navigate]);

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
      alert(error);
      return;
    }
    alert("signOut successfully");
    navigate("/signin");
  }
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <>
      <Box>
        <Container sx={{}}>
          <Typography variant="h4">Welcome to Dashboard</Typography>
          <Typography variant="h6">You are successfully logged in</Typography>
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default Dashboard;
