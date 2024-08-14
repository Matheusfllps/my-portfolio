import { Button, Container, Grid, styled, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Avatar from "../../../assets/images/avatar.png";
import { MailOutlineOutlined } from "@mui/icons-material";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));
  const StyledIMg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledIMg src={Avatar} alt="" />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1">
                Matheus Segundo
              </Typography>
              <Typography color="primary" variant="h2">
                I´m a Software Engineer
              </Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <Button>
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <Button>
                    <MailOutlineOutlined />
                    Contact Me
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
