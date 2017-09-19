READEME - Bartender Application

//  Installation Instructions   //

Requirements:
- Android SDKs
- Android Emulator

1. Recommend downloading Android Studio as the SDKs and emulators are built in, and that is the
   environment this program was developed in.

2. Once installed, go to TOOL/ANDROID/SDK MANAGER and make sure you have downloaded:
   SDK PLATFORMS
   - Android 4.4 (KitKat)
   SDK TOOLS
   - Android SDK Tools
   - Android Emulator
   - Android SDK Platform-Tools
   - Android SDK Tools
   - Google Play Services
   - Documentation for Android SDK
   - Support Repository (ALL)
   (Note: Some may already be installed)

4. Once the SDKs are installed, go to FILE/OPEN and browse to the project file.

5. Open the project

6. Next install an appropriate emulator
   - Go to TOOLS/ANDROID/AVD MANAGER
   - Click create virtual device in bottom left corner
   - In the left tab, browse to the TABLETS
   - Select NEXUS 10
   - Hit NEXT
   - Tab to the x86 Images, and download/select the "KitKat, 19, x86, Android 4.4"
   - Hit NEXT, then hit FINISH

7. To use the database
   - Go to Tools, Firebase
   - Open Realtime Database pull-down and click 'Save and retreive data'
   - Connect to external database.

(Database is connected through login, a gmail login and a firebase database is needed)

Now the program should be loaded, the SDKs should be ready, and an emulator is available for the
project to run. Find the RUN 'app' button in the toolbar and a prompt will ask you to choose
an emulator. Select the one just made and it will run the app.

// User Instructions //

The initial screen is a welcome screen where the user views a calendar and has a button �Bar Orders�
	- Click the �...Orders� button.
		- Go to orders page
	- Select day in calendar
		- View work schedule (not implemented)
At the orders page, the user will view a list of current orders available to be made. The page has a selectable
list-view, a button �Out of Ingredients�, and a button �Problem�.
	- Click item in the list-view
		- Prompt to confirm or cancel
			- Cancel removes the prompt
			- Confirm will remove the prompt and remove the item from the queue
	- Click �Out of Ingredients�
		- Brought to List_Item page
	- Click �Problem�
		- Brought to Problem page
At the List_item page, the user can view and select another list-view that contains various ingredients related to the orders in the queue.
	- Click item in the list-view
		- Prompt to confirm or cancel
			- Cancel will remove prompt
			- Confirm will remove the prompt and remove the relevant orders from the queue
At the Problem page, the user can enter a message that would be sent off the notify waiters/managers/hosts of any issues other than missing ingredients
	- Type text
	- Click notify
		- Will bring a prompt that notifies the current user the message has been sent
			- Click �Ok� to return to the orders page

// Available Files //

Java Files at Bartender_Application\app\src\main\java\com\example\brett\bartender_application

XML Layout files at Bartender_Application\app\src\main\res\layout

XML Values files at Bartender_Application\app\src\main\res\values

Testing files at Bartender_Application\app\src\androidTest\java\com\example\brett\bartender_application

// Tests //
Simply navigate to the tests folder specified in the Available Files section, and right click ExampleInstrumentedTest.java and
hit run. Select the Nexus tablet emulator created earlier.

// Release Notes //

Version 1.2 (current version)

- Working Firebase realtime database push, read, and delete operations
- Created page to display user work shift details
- Redesigned order list layout

Version 1.1

- Implemented interface with buttons that travel from page to page.
- Alert prompt for order queue confirmation.
- Notify page with textView and notify button to pass messages, hitting notify will return to prior
  page.
- Ingredients page that will remove specific meals from order queue.


