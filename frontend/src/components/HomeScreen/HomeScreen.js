import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import VideoSearch from "../AppBar/VideoSearch/VideoSearch";
import FeaturedPlaylists from "./FeaturedPlaylists/FeaturedPlaylists";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
function HomeScreen({
  handleSearchTermInput,
  handleSubmitVideoSearch,
  searchTerm,
  showHomeScreen,
  setQueue,
  setNowPlaying,
  nowPlaying,
  setQueueName,
  setShowQueue,
  isLoading,
  queue,
  addSongToQueue
}) {
  if (!showHomeScreen) {
    return <div id="empty-div"></div>;
  }

  return (
    <Box mt={4}>
      <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
        <Grid item>
          <Typography
            align="center"
            variant="h1"
            color="textSecondary"
            style={{ fontSize: "8vw" }}
            xs={12}
          >
            {process.env.REACT_APP_NAME}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align="center"
            color="textSecondary"
            style={{
              letterSpacing: "2px",
              wordSpacing: "16px",
            }}
          >
            {process.env.REACT_APP_TAGLINE}
          </Typography>
        </Grid>

        <Grid item></Grid>
        <Grid item container justify="center">
          <VideoSearch
            handleSearchTermInput={handleSearchTermInput}
            handleSubmitVideoSearch={handleSubmitVideoSearch}
            searchTerm={searchTerm}
            style={{
              maxWidth: 800,
            }}
          />
        </Grid>
        <Grid item>{isLoading && <LoadingAnimation size="32px" />}</Grid>
        <Grid item>
          <Box mt={12}>
            <FeaturedPlaylists
              {...{
                setQueue,
                setNowPlaying,
                setShowQueue,
                nowPlaying,
                setQueueName,
                queue,
                addSongToQueue
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeScreen;
