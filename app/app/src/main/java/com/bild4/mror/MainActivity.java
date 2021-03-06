package com.bild4.mror;


import android.net.Uri;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity implements RSSFragment.OnFragmentInteractionListener, BlindsFragment.OnFragmentInteractionListener {

    /**
     * The {@link android.support.v4.view.PagerAdapter} that will provide
     * fragments for each of the sections. We use a
     * {@link FragmentPagerAdapter} derivative, which will keep every
     * loaded fragment in memory. If this becomes too memory intensive, it
     * may be best to switch to a
     * {@link android.support.v4.app.FragmentStatePagerAdapter}.
     */
    private SectionsPagerAdapter mSectionsPagerAdapter;
    RSSFragment rssFragment;
    BlindsFragment blindsFragment;
    /**
     * The {@link ViewPager} that will host the section contents.
     */
    private ViewPager mViewPager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        // Create the adapter that will return a fragment for each of the three
        // primary sections of the activity.
        mSectionsPagerAdapter = new SectionsPagerAdapter(getSupportFragmentManager());

        // Set up the ViewPager with the sections adapter.
        mViewPager = (ViewPager) findViewById(R.id.container);
        mViewPager.setAdapter(mSectionsPagerAdapter);
        mViewPager.setOnPageChangeListener(
                new ViewPager.SimpleOnPageChangeListener() {
                    @Override
                    public void onPageSelected(int position) {
                        // When swiping between pages, select the
                        // corresponding tab.
                        if (position == 0) {
                            Comm.send("RSS_GET$GET");
                        }
                    }
                });

        TabLayout tabLayout = (TabLayout) findViewById(R.id.tabs);
        tabLayout.setupWithViewPager(mViewPager);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
        fab.setVisibility(View.GONE);

    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onFragmentInteraction(Uri uri) {

    }


    /**
     * A placeholder fragment containing a simple view.
     */
    public static class PlaceholderFragment extends Fragment {
        /**
         * The fragment argument representing the section number for this
         * fragment.
         */
        private static final String ARG_SECTION_NUMBER = "section_number";

        public PlaceholderFragment() {
        }

        /**
         * Returns a new instance of this fragment for the given section
         * number.
         */
        public static PlaceholderFragment newInstance(int sectionNumber) {
            PlaceholderFragment fragment = new PlaceholderFragment();
            Bundle args = new Bundle();
            args.putInt(ARG_SECTION_NUMBER, sectionNumber);
            fragment.setArguments(args);
            return fragment;
        }

        @Override
        public View onCreateView(LayoutInflater inflater, ViewGroup container,
                                 Bundle savedInstanceState) {
            View rootView = inflater.inflate(R.layout.fragment_main, container, false);
            TextView textView = (TextView) rootView.findViewById(R.id.section_label);
            textView.setText(getString(R.string.section_format, getArguments().getInt(ARG_SECTION_NUMBER)));
            return rootView;
        }
    }


    public void addFeed(View v) {
        rssFragment.addFeed(v);
    }

    public void socketon(View v) {
        blindsFragment.socketon(v);
    }

    public void socketoff(View v) {
        blindsFragment.socketoff(v);
    }

    public void blindsSend(View v) {
        blindsFragment.blindsSend(v);
    }

    /**
     * A {@link FragmentPagerAdapter} that returns a fragment corresponding to
     * one of the sections/tabs/pages.
     */
    public class SectionsPagerAdapter extends FragmentPagerAdapter {

        public SectionsPagerAdapter(FragmentManager fm) {
            super(fm);
        }

        @Override
        public Fragment getItem(int position) {
            // getItem is called to instantiate the fragment for the given page.
            // Return a PlaceholderFragment (defined as a static inner class below).
//            return PlaceholderFragment.newInstance(position + 1);
            if (position == 0) {
                rssFragment = RSSFragment.newInstance();
                return rssFragment;
            } else if (position == 1) {
                blindsFragment = blindsFragment.newInstance();
                return blindsFragment;
            } else return PlaceholderFragment.newInstance(2);

        }

        @Override
        public int getCount() {
            // Show 3 total pages.
            return 2;
        }

        @Override
        public CharSequence getPageTitle(int position) {
            switch (position) {
                case 0:
                    return "RSS FEEDS";
                case 1:
                    return "CONTROLS";
                case 2:
                    return "SECTION 3";
            }
            return null;
        }


    }
}


//
//public class MainActivity extends AppCompatActivity {
//
//    //    CommInterface commInterface;
////    Comm client;
//    Handler handler;
//
//    @Override
//    protected void onCreate(Bundle savedInstanceState) {
////        client = Connect.client;
////        CommInterface commInterface = client;
//        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_main);
//        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
//        setSupportActionBar(toolbar);
////        commInterface = (CommInterface) getIntent().getSerializableExtra("interface");
//        findViewById(R.id.off).setVisibility(View.GONE);
//        handler = new Handler(Looper.getMainLooper());
//
//        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
//        fab.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//                Snackbar.make(view, "not connected", Snackbar.LENGTH_LONG)
//                        .setAction("Action", null).show();
////                new send().execute();
//            }
//        });
//
//        Comm.getSocket().addListener(new WebSocketAdapter() {
//            @Override
//            public void onTextMessage(WebSocket websocket, String message) throws Exception {
//                final String MESSAGE = message;
//                handler.post(new Runnable() {
//                    public void run() {
//
////                Log.d("recieving directly", message);
//                        if (MESSAGE.startsWith("COOLING$")) {
//                            if (MESSAGE.endsWith("$0")) {
//                                findViewById(R.id.on).setVisibility(View.GONE);
//                                findViewById(R.id.off).setVisibility(View.VISIBLE);
//                            } else if (MESSAGE.endsWith("$1")) {
//                                findViewById(R.id.off).setVisibility(View.GONE);
//                                findViewById(R.id.on).setVisibility(View.VISIBLE);
//                            }
//                        }
//                    }
//                });
//            }
//        });
//        Comm.send("COOLING$GET");
////        new SendText().execute();
//
////        new findIP().execute();
////        new send().execute();
//    }
//
//    @Override
//    public boolean onCreateOptionsMenu(Menu menu) {
//        // Inflate the menu; this adds items to the action bar if it is present.
//        getMenuInflater().inflate(R.menu.menu_main, menu);
//        return true;
//    }
//
//    @Override
//    public boolean onOptionsItemSelected(MenuItem item) {
//        // Handle action bar item clicks here. The action bar will
//        // automatically handle clicks on the Home/Up button, so long
//        // as you specify a parent activity in AndroidManifest.xml.
//        int id = item.getItemId();
//
//        //noinspection SimplifiableIfStatement
//        if (id == R.id.action_settings) {
//            return true;
//        }
//
//        return super.onOptionsItemSelected(item);
//    }
//
//    public void turnOn(View view) {
//        Comm.send("COOLING$1");
//    }
//
//    public void turnOff(View view) {
//        Comm.send("COOLING$0");
//    }
//
//    public void write(View view) {
//        Comm.send("TEXT$" + ((EditText) findViewById(R.id.editText2)).getText().toString());
//    }
//
//
//    private class SendText extends AsyncTask<Void, Void, Void> {
//
//        String s;
//
//        @Override
//        protected void onPreExecute() {
//            super.onPreExecute();
//            s = ((EditText) findViewById(R.id.editText)).getText().toString();
//        }
//
//        @Override
//        protected Void doInBackground(Void... voids) {
//            Comm.send(s);
//
//            return null;
//
//        }
//
//        @Override
//        protected void onPostExecute(Void aVoid) {
//            super.onPostExecute(aVoid);
//            new SendText().execute();
//        }
//    }
//
//}
