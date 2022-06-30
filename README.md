ckeditor for nextjs app lastest version of next (30/06/2022)

how to custom ckeditor build 

step1: go to [CKeditor builder online](https://ckeditor.com/ckeditor-5/online-builder/)
step2: custom your build and download that build then  copy the ckeditor5-custom build to root dir

	├── ckeditor5
	│   ├── build
	│   ├── sample
	│   ├── src
	│   ├── ...
	│   ├── package.json
	│   └── webpack.config.js
	├── node_modules
	├── public
	├── src
	├── ...
	└── package.json
	
	
	
step3: change  "@ckeditor/ckeditor5-build-classic": "file://path_to_custombuild",

step4: yarn && yarn dev
