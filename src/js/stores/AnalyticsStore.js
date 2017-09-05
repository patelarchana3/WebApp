var Dispatcher = require("../dispatcher/Dispatcher");
var FluxMapStore = require("flux/lib/FluxMapStore");

class AnalyticsStore extends FluxMapStore {

  getInitialState () {
    return {
    };
  }

  reduce (state, action) {
    // const ACTION_VOTER_GUIDE_VISIT = 1;
    // const ACTION_VOTER_GUIDE_ENTRY = 2;
    // const ACTION_ORGANIZATION_FOLLOW = 3;
    // const ACTION_ORGANIZATION_AUTO_FOLLOW = 4;
    // const ACTION_ISSUE_FOLLOW = 5;
    // const ACTION_BALLOT_VISIT = 6;
    // const ACTION_POSITION_TAKEN = 7;
    // const ACTION_VOTER_TWITTER_AUTH = 8;
    // const ACTION_VOTER_FACEBOOK_AUTH = 9;
    // const ACTION_WELCOME_ENTRY = 10;
    // const ACTION_FRIEND_ENTRY = 11;

    // Exit if we don't have a successful response (since we expect certain variables in a successful response below)
    if (!action.res || !action.res.success)
      return state;

    switch (action.type) {
      case "saveAnalyticsAction":
        // if (action.res.action_constant === ACTION_VOTER_GUIDE_VISIT) {
        // }

        return {
          ...state,
        };

      default:
        return state;
    }
  }
}

module.exports = new AnalyticsStore(Dispatcher);
