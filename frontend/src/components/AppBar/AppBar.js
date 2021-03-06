import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Box } from "@material-ui/core";
import VideoSearch from "./VideoSearch/VideoSearch";
import Menu from "./Menu/Menu";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

// import UserSection from "./UserSection/UserSection";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  backdropFilter: {
    backdropFilter: "blur(4px) brightness(85%)",
  },
  appbar: {
    transition: "backdrop-filter 2s",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function QasongAppBar({
  handleSubmitVideoSearch,
  queue,
  darkMode,
  setDarkMode,
  isLoading,
  showAboutUs,
  setShowAboutUs,
}) {
  const [scrollTop, setScrollTop] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className={classes.grow}>
      <AppBar
        color="transparent"
        className={`${scrollTop > 111 ? classes.backdropFilter : ""} ${classes.appbar}`}
      >
        <Toolbar>
          {/* Icon-logo */}
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Qasong logo"
            >
              <img
                src=".\img\whiteLogo.png"
                height="36px"
                width="36px"
                style={{ filter: `invert(${darkMode ? "0" : "1"})` }}
              />
            </IconButton>
          </Link>

          {/* Search bar */}
          <VideoSearch
            handleSubmitVideoSearch={handleSubmitVideoSearch}
            style={{
              margin: "0 auto",
              maxWidth: 800,
            }}
          />

          {/* Search Bar Loading Indicator */}
          <Box mx={2}> {isLoading && <LoadingAnimation size="32px" />} </Box>

          {/* responsive spacer */}
          <div className={classes.grow} />

          {/* Menus */}
          <Menu
            queueLength={queue.length}
            {...{
              darkMode,
              setDarkMode,
              showAboutUs,
              setShowAboutUs,
            }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
