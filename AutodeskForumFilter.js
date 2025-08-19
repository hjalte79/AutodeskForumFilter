// document.body.style.border = "5px solid red";
initialize();



function initialize() {
	try {
				
		// remove sticky posts from header and expand header	
		/*
		try {
			const divStickyPosts = document.getElementsByClassName("lia-quilt-column-right-content")[0];;
			divStickyPosts.remove()
				
			const divHeader = document.getElementsByClassName("lia-quilt-column-left-content")[0];
			divHeader.classList.remove("lia-quilt-column-16");
			divHeader.classList.add("lia-quilt-column-24");
		}
		catch(err) {
			// In some (debug) cases the sticky note are already removed. This prevents exceptions. 
		}
		*/

		// Remove trending posts row on top of the page
		try {
			const divTrending = document.getElementsByClassName("custom-board-carousel")[0];	
			divTrending.style.display = 'none';           // Hide
			
		}
		catch(err) {
			// On some pages there is none trending posts row. This prevents exceptions. 
		}
		
		
		// float the reply button to make it always visable
		try {
			const divTrending2 = document.getElementsByClassName("lia-quilt-column-alley lia-quilt-column-alley-right")[0]; // "custom-reply-button-root")[0];	
			divTrending = divTrending2.getElementsByClassName("custom-reply-button-root")[0];
			divTrending.style.position = 'fixed';
			divTrending.style.width = '100px'; 
			divTrending.style.top = '150px'; 
			divTrending.style.right = '20px';  
			divTrending.style.height = '40px';
			divTrending.style.background = '#f00';
			// position: fixed;
			// width: 200px;
			// bottom: 50px;
			// left: 10px;
		}
		catch(err) {
			// On some pages there is none trending posts row. This prevents exceptions. 
		}
		
		
		
		
		
		
		
		
		// remove colom right of all posts and expand the posts column
		/*
		const divRightColumn = document.querySelector(".lia-quilt-column-alley-right");
		divRightColumn.remove()
		
		const divPosts = document.querySelector(".lia-quilt-column-16");
		divPosts.classList.remove("lia-quilt-column-16");
		divPosts.classList.add("lia-quilt-column-24");
		*/

		
		// Setup filleter Button
		try {		
			var tabsDiv = document.querySelector(".custom-posts-links");
			
			var link = document.createElement("a");
			link.innerText = "Filter";
			link.className  = "lia-link-navigation tab-link lia-custom-event";
			link.addEventListener("click", ApplyFilter);
			
			tabsDiv.appendChild(link);
		}
		catch(err) {
			// Only on topic list pages I can add the fillter button. Cathing the exception is the only solution. 
		}
		
		
		// click on the all posts link. (Im not interested in the trending posts)
		/*
		const spanAllPosts = document.querySelector("span.custom-message-posts-links-option:nth-child(2)");
		if (spanAllPosts !== null) {
			spanAllPosts.click();
		}
		*/
	}
	catch(err) {
		alert(err.message);
		console.log(err.message);
	}	
}


function ApplyFilter() {

	// remove colom right of all posts and expand the posts column
	const divRightColumn = document.querySelector(".lia-quilt-column-alley-right");
	divRightColumn.remove()
	
	const divPosts = document.querySelector(".lia-quilt-column-16");
	divPosts.classList.remove("lia-quilt-column-16");
	divPosts.classList.add("lia-quilt-column-24");
	
	// alert("Started");
	const list = document.getElementsByClassName("message-list")[0].childNodes;
	
	for (let i = 0; i < list.length; i++) {
		try {
		
			const article = list[i];
			if (Object.prototype.toString.call(article) === "[object Text]") {
				continue;
			}
			
			const message = article.childNodes[1];
			
			
			const topicStarterNode = message.getElementsByClassName("custom-tile-author-name")[0];
			const replyedByNode = message.getElementsByClassName("custom-tile-author-name")[1];
			
			// alert(topicStarterNode.innerText + " - " + replyedByNode.innerText );	
			// alert(topicStarterNode.innerText);
			// alert( replyedByNode.querySelector("[class='custom-tile-author-name']"));
			// alert((topicStarterNode.innerText === replyedByNode.innerText));
			
			if (typeof replyedByNode === 'undefined') {
				message.style.backgroundColor = "#e6ffe6";				
			} else if (topicStarterNode.innerText.trim() === replyedByNode.innerText.trim()) {
				message.style.backgroundColor = "#ffffcc";
			}
			
			//const repliesTile = message.getElementsByClassName("custom-tile-replies")[0];			
			//alert(repliesTile.innerText);		
			
			
			if (article.classList.contains("custom-thread-solved")) {
				article.remove();			
				//message.style.backgroundColor = "#e6ffe6";
				continue;
			}
			
			
			
			// change list style
			article.style.padding = "5px";
			
			const msgInfo = message.getElementsByClassName("msg-info")[0];
			const seperator = message.getElementsByClassName("seperator")[0];
			const author = message.getElementsByClassName("custom-tile-author-name")[0];
			const msgStatistics = message.getElementsByClassName("custom-tile-statistics")[0];
			const bookMark = message.getElementsByClassName("book-mark")[0];
			
			if (typeof msgStatistics === 'undefined') {	
				return;
			}
			const replyAuthor = msgStatistics.getElementsByClassName("custom-tile-author-name")[0];
			const numberOfReplies = msgStatistics.getElementsByClassName("custom-tile-replies")[0];
			
			
			// STOP HERE
			continue;
			
			
			var newNumberOfRepliesNode = document.createElement("div");
			newNumberOfRepliesNode.innerHTML = numberOfReplies.innerHTML;
			newNumberOfRepliesNode.className  = "custom-tile-replie";
			
			if (typeof replyedByNode !== 'undefined') {	
				insertAfter(author, replyAuthor);
				
				//const newSeperator = seperator.cloneNode(true);				
				//insertAfter(author, newSeperator);
				
				
				insertAfter(replyAuthor, newNumberOfRepliesNode);
						
				//insertAfter(replyAuthor, seperator.cloneNode(true));
				
			}
			
			
			bookMark.remove();
			msgStatistics.remove();
			
			// Make links target new tabs
			const link = message.getElementsByClassName("message")[0].childNodes[1].childNodes[1];
			link.target = '_blank';
		}
		catch(err) {
			alert(err.message);
		}
		
		
	}
			
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
