/**
 * Dummy content for development.
 *
 * IMPORTANT: every reward amount below is SAMPLE data used to lay out the UI.
 * None of it is an official VELOOP reward value. Replace with values from the
 * approved rules / API before release. Banners that show amounts display a
 * visible "sample values" note while `isSample` is true.
 */
export const referData = {
  referralCode: 'VELOOP123',
  referralLink: 'https://veloop.example/r/VELOOP123',
  youEarn: { amount: 500, unit: 'VEs' },
  friendGets: { amount: 200, unit: 'VEs' },
  isSample: true,
};

export const bonusData = {
  activities: [
    { id: 'checkin', title: 'Daily check-in', hint: 'Stay active', icon: 'checkin' },
    { id: 'invite', title: 'Invite friends', hint: 'Grow together', icon: 'invite' },
    { id: 'tasks', title: 'Complete tasks', hint: 'Earn more', icon: 'tasks' },
  ],
};

export const swapData = {
  from: { code: 'VE', name: 'Reward currency', tone: 'gold' },
  to: { code: 'SVE', name: 'Reward currency', tone: 'blue' },
};

export const captchaData = {
  // characters that are easy to tell apart (no 0/O, 1/I)
  alphabet: 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789',
  initialCode: 'K7M4',
};

export const exchangeData = {
  from: { code: 'GEM', label: 'Gem' },
  to: { code: 'VE', label: 'VE' },
};

/** Content for the demo destination pages the CTAs link to. */
export const featurePages = {
  refer: {
    title: 'Refer & Earn',
    intro: 'Share your code. When a friend joins and completes eligible activities, you both unlock rewards.',
    steps: [
      'Copy your referral code or link.',
      'Your friend signs up to VELOOP Rewards with it.',
      'They complete the eligible activities in the referral rules.',
      'Rewards for you and your friend are credited after verification.',
    ],
  },
  swap: {
    title: 'Swap Center',
    intro: 'Convert eligible balances between supported reward currencies, such as VE and SVE.',
    steps: [
      'Choose the balance you want to convert from.',
      'Pick the currency to convert to and enter an amount.',
      'Review the current rate and any limits.',
      'Confirm the swap. Both balances update in your wallet.',
    ],
  },
  bonus: {
    title: 'Bonus VEs',
    intro: 'Extra VEs from eligible campaigns, activities and promotions.',
    steps: [
      'Check in daily to keep your activity streak going.',
      'Invite friends and complete eligible tasks.',
      'Track bonus progress on this page.',
      'Claim unlocked bonuses before they expire.',
    ],
  },
  captcha: {
    title: 'Captcha Tasks',
    intro: 'Solve short captcha tasks accurately. Correct, eligible submissions earn Gems.',
    steps: [
      'Start a task to load a captcha.',
      'Type the characters exactly as shown.',
      'Submit. Your answer is verified.',
      'Gems are added for eligible correct answers.',
    ],
  },
  exchange: {
    title: 'Exchange Center',
    intro: 'Exchange eligible Gems into VEs and grow your VE balance.',
    steps: [
      'Open the Exchange Center and see your Gem balance.',
      'Check the current exchange rate.',
      'Enter how many Gems to exchange.',
      'Confirm. VEs are credited to your wallet.',
    ],
  },
};
