import { Container, Grid, styled, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Avatar from "../../../assets/images/avatar.png";
import { MailOutlineOutlined } from "@mui/icons-material";
import theme from "../../../theme";
import StyledButoon from "../../../components/styledButton";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: 'flex',
    alignItems: 'center',
  }));
  const StyledIMg = styled("img")(({theme}) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
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
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                Matheus Segundo
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                I´m a Software Engineer
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButoon>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButoon>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButoon>
                    <MailOutlineOutlined />
                    <Typography> Contact Me</Typography>
                  </StyledButoon>
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
