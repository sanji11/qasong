import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const SearchResults = React.lazy(() =>
  import("./components/SearchResults/SearchResults")
);
const HomeScreen = React.lazy(() => import("./components/HomeScreen/HomeScreen"));
const AppBar = React.lazy(() => import("./components/AppBar/AppBar"));
const QueueSection = React.lazy(() => import("./components/QueueSection/QueueSection"));

function Routes({
  darkMode,
  isLoading,
  nowPlaying,
  searchTerm,
  setDarkMode,
  setSearchTerm,
  setShowQueue,
  setVideos,
  user,
  showHomeScreen,
  searchTableViewMode,
  handleSearchTermInput,
  handleSubmitVideoSearch,
  queue,
  queueName,
  setQueueName,
  setNowPlaying,
  setQueue,
  videos,
  setSearchTableViewMode,
  addSongToQueue,
}) {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <AppBar
          {...{
            darkMode,
            handleSearchTermInput,
            handleSubmitVideoSearch,
            isLoading,
            queue,
            searchTerm,
            setDarkMode,
            setSearchTerm,
            setVideos,
            user,
          }}
        />
      </Suspense>
      <div>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <Suspense fallback={<div />}>
              <SearchResults
                {...{
                  searchTableViewMode,
                  handleSearchTermInput,
                  handleSubmitVideoSearch,
                  nowPlaying,
                  queue,
                  setNowPlaying,
                  setQueue,
                  videos,
                  setSearchTableViewMode,
                }}
              />
            </Suspense>
          </Route>
          <Route path="/queue">
            <Suspense fallback={<div />}>
              <QueueSection
                {...{
                  nowPlaying,
                  queue,
                  queueName,
                  setNowPlaying,
                  setQueue,
                  setQueueName,
                }}
              />
            </Suspense>
          </Route>
          <Route exact path="/">
            <Suspense fallback={<div />}>
              <HomeScreen
                {...{
                  handleSubmitVideoSearch,
                  handleSearchTermInput,
                  searchTerm,
                  showHomeScreen,
                  setQueue,
                  setQueueName,
                  setNowPlaying,
                  nowPlaying,
                  queueName,
                  setShowQueue,
                  isLoading,
                  queue,
                  addSongToQueue,
                }}
              />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
