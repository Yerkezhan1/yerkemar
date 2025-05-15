        // Sample data (this can be expanded with more countries)
        const countryData = {
            "switzerland": {
                "name": "Switzerland",
                "intro": "Switzerland is a landlocked country located in the heart of Europe, known for its natural beauty and political neutrality. It is renowned for its well-preserved landscapes, including the majestic Alps and pristine lakes. The country is famous for its precision industries, including watchmaking and banking, and its quality of life is considered one of the highest in the world.",
                "image": "assets/countries/Switzerland-1.png",  // Replace with actual image path
                "addImg1": "assets/countries/Switzerland-2.png",
                "addImg2": "assets/countries/Switzerland-3.png",
                "description": "Switzerland boasts one of the most stable economies globally, with a high per capita income and low unemployment. Its education system is world-renowned, particularly for fields like finance, technology, and the arts. The country is home to several prestigious universities and research institutions. Swiss cities like Zurich and Geneva are major international hubs for business and diplomacy, offering a unique blend of urban sophistication and access to the surrounding nature. Switzerland also places a strong emphasis on sustainability and innovation.",
                "capital": "Bern",
                "largestCity": "Zurich",
                "languages": "German, French, Italian, Romansh",
                "government": "Federal direct democracy with a president",
                "currency": "Swiss Franc (CHF)",
                "economy": "Finance, pharmaceuticals, technology, tourism, etc.",
                "famousFor": "Swiss watches, chocolate, banking, skiing, high quality of life",
                "additionalInfo": "Switzerland has no standing army, relying on a policy of neutrality in conflicts. It is also home to many international organizations, including the Red Cross and various UN offices. Despite its small size, it plays a significant role in global diplomacy and trade."
            },
            "italy": {
                "name": "Italy",
                "intro": "Italy, a boot-shaped country in Southern Europe, is renowned for its rich history, art, and cuisine. From the ancient ruins of Rome to the canals of Venice, Italy offers a tapestry of cultural and natural beauty. The nation's influence spans across fashion, design, and culinary arts, making it a global cultural powerhouse.",
                "image": "assets/countries/italy-2.png",  // Replace with actual image path
                "addImg1": "assets/countries/italy-1.png",
                "addImg2": "assets/countries/italy-m.png",
                "description": "Italy boasts a diverse economy, with strengths in manufacturing, fashion, and tourism. The country is the world's eighth-largest economy by nominal GDP and the third-largest in the European Union. Its rich cultural heritage includes over 60 UNESCO World Heritage Sites, the most of any country. Italian cities like Rome, Florence, and Venice are cultural hubs attracting millions of visitors annually. Italy's education system is well-regarded, with a strong emphasis on arts, humanities, and sciences. The nation is also a leader in sustainable agriculture and renewable energy initiatives.",
                "capital": "Rome",
                "largestCity": "Rome",
                "languages": "Italian (official), German, French, Slovene",
                "government": "Parliamentary republic",
                "currency": "Euro (EUR)",
                "economy": "Manufacturing, fashion, tourism, agriculture, technology",
                "famousFor": "Pizza, pasta, Renaissance art, opera, luxury fashion, sports cars",
                "additionalInfo": "Italy is a founding member of the European Union and the United Nations. It has the highest number of UNESCO World Heritage Sites, with 58 cultural and 5 natural sites. The country is also known for its diverse regional cultures and cuisines, offering a unique experience in each area."
            },
            "australia": {
                "name": "Australia",
                "intro": "Australia, the largest island and smallest continent, is a land of contrasts, from its vibrant cities like Sydney and Melbourne to the vast, rugged Outback. Known for its unique wildlife, including kangaroos and koalas, Australia offers diverse landscapes ranging from tropical rainforests to arid deserts. The country is a global leader in environmental conservation, and its coastal beauty, including the Great Barrier Reef, attracts millions of visitors every year.",
                "image": "assets/countries/Australia-1.png",
                "addImg1": "assets/countries/Australia-2.png",            // Replace with actual image path
                "addImg2": "assets/countries/Australia-3.png",
                "description": "Australia's economy is diverse, with strengths in mining, agriculture, and services. It is the world's 13th-largest economy, with a high standard of living and a strong education system. The country is famous for its stunning beaches, world-class wine regions, and unique wildlife. Australia is also a leader in sustainability and renewable energy technologies. Cities like Sydney, Melbourne, and Brisbane are cultural and economic hubs, offering a mix of modernity and natural beauty. Education and healthcare are world-class, making it a popular destination for international students.",
                "capital": "Canberra",
                "largestCity": "Sydney",
                "languages": "English (official), with many other languages spoken due to immigration",
                "government": "Federal parliamentary constitutional monarchy",
                "currency": "Australian Dollar (AUD)",
                "economy": "Mining, agriculture, services, tourism, manufacturing",
                "famousFor": "The Great Barrier Reef, kangaroos, Sydney Opera House, beaches, wine regions, surfing",
                "additionalInfo": "Australia is one of the most highly urbanized countries, with over 85% of its population living in cities. It is also a founding member of the United Nations, the World Trade Organization, and the Commonwealth of Nations. Australia is known for its sporting culture, with major events like the Australian Open and the Sydney to Hobart Yacht Race."
            },
            "austria": {
                "name": "Austria",
                "intro": "Austria, a landlocked country in Central Europe, is known for its cultural heritage, stunning alpine landscapes, and its historical role as the heart of the Habsburg Empire. With its classical music roots, Austria has produced some of the greatest composers like Mozart, Beethoven, and Strauss. The country combines rich history with modern innovation, making it a top destination for travelers and a strong player in European diplomacy.",
                "image": "assets/countries/Austria-1.png",
                "addImg1": "assets/countries/Austria-2.png",
                "addImg2": "assets/countries/Austria-3.png",
                "description": "Austria has a highly developed economy, with significant strengths in industries such as machinery, automotive, and chemicals. Its GDP ranks among the highest in Europe. The country is renowned for its cultural institutions, including art galleries, theaters, and opera houses, particularly in Vienna. Austria also places great importance on environmental sustainability and quality of life, with a robust healthcare system and one of the highest life expectancy rates in Europe. Austria is known for its skiing resorts, especially in the Alps, attracting visitors year-round.",
                "capital": "Vienna",
                "largestCity": "Vienna",
                "languages": "German (official), with recognized minority languages including Croatian, Hungarian, and Slovenian",
                "government": "Federal parliamentary republic",
                "currency": "Euro (EUR)",
                "economy": "Machinery, automotive, chemicals, electronics, tourism",
                "famousFor": "Classical music, Vienna Philharmonic, alpine skiing, Sachertorte (chocolate cake), cultural heritage",
                "additionalInfo": "Austria is a founding member of the United Nations and the European Union. Vienna, the capital, is a hub for international diplomacy, hosting numerous international organizations, including the United Nations Office. The country is also known for its high quality of life, public transport system, and excellent education and healthcare services."
            },

            "germany": {
                "name": "Germany",
                "intro": "Germany, located in the heart of Europe, is known for its rich history, technological innovation, and cultural contributions. From its medieval castles to modern metropolises like Berlin and Munich, Germany offers a blend of tradition and cutting-edge progress. The country is a global leader in engineering, manufacturing, and sustainability, with a thriving economy and a commitment to environmental protection.",
                "image": "assets/countries/Germany-1.png",
                "addImg1": "assets/countries/Germany-2.png",
                "addImg2": "assets/countries/Germany-3.png",
                "description": "Germany has one of the world's strongest economies, driven by a highly skilled workforce and cutting-edge industries, including automotive, chemicals, and machinery. It is the largest economy in Europe and the fourth-largest by nominal GDP worldwide. The country is also a major player in international politics, with a strong commitment to the European Union, NATO, and the United Nations. Germany’s education system is highly regarded, with numerous top-ranking universities and research institutions. Its cultural offerings, from music festivals to art museums, reflect a rich heritage that spans centuries.",
                "capital": "Berlin",
                "largestCity": "Berlin",
                "languages": "German (official), with regional languages such as Low German, Sorbian, and others",
                "government": "Federal parliamentary republic",
                "currency": "Euro (EUR)",
                "economy": "Automotive, machinery, chemicals, electronics, finance, tourism",
                "famousFor": "Volkswagen, beer, sausages, classical music (Beethoven, Bach), Oktoberfest, castles",
                "additionalInfo": "Germany is a founding member of the European Union and the United Nations, and it plays a pivotal role in European and global geopolitics. The country is also known for its environmental policies, being a leader in renewable energy and green technologies. With a high standard of living, universal healthcare, and an efficient public transport system, Germany is considered one of the best countries for work and life."
            },

            "france": {
                "name": "France",
                "intro": "France, located in Western Europe, is known for its historical landmarks, art, fashion, and rich cultural heritage. From the iconic Eiffel Tower in Paris to the vineyards of Bordeaux, France offers a unique blend of modern innovation and timeless tradition. It is a global leader in art, cuisine, and fashion, and has a deep influence on global politics, economy, and culture.",
                "image": "assets/countries/France-1.png",
                "addImg1": "assets/countries/France-2.png",
                "addImg2": "assets/countries/France-3.png",
                "description": "France has one of the largest economies in Europe, with strong industries in fashion, luxury goods, automotive, aerospace, and tourism. Paris, the capital, is a major cultural, fashion, and financial hub, attracting millions of visitors annually. The country is renowned for its world-class wine regions, art museums, and historical monuments. France also plays a significant role in the European Union and international diplomacy, with a focus on human rights, peacekeeping, and environmental protection. Its education system and healthcare services are considered among the best in the world.",
                "capital": "Paris",
                "largestCity": "Paris",
                "languages": "French (official), with regional languages such as Breton, Corsican, Occitan",
                "government": "Semi-presidential republic",
                "currency": "Euro (EUR)",
                "economy": "Fashion, automotive, aerospace, luxury goods, tourism, agriculture",
                "famousFor": "Eiffel Tower, Louvre Museum, wine, cheese, baguettes, haute couture, history, art",
                "additionalInfo": "France is a founding member of the European Union, NATO, and the United Nations. It has a rich history of political and cultural influence, from the French Revolution to its contributions to art, literature, and philosophy. The country is also a leader in the global efforts towards environmental sustainability and has implemented numerous initiatives for clean energy and climate change mitigation."
            },

            "belgium": {
                "name": "Belgium",
                "intro": "Belgium, located in Western Europe, is known for its medieval towns, Renaissance architecture, and rich cultural history. The country is famous for its art, chocolates, and beer, and has a strategic location at the crossroads of Europe. Belgium plays a central role in European politics, hosting major EU institutions in Brussels, and has a strong presence in international diplomacy.",
                "image": "assets/countries/Belgium-1.png",
                "addImg1": "assets/countries/Belgium-2.png",
                "addImg2": "assets/countries/Belgium-3.png",
                "description": "Belgium has a highly developed economy, with key industries including manufacturing, technology, and services. The country is also one of the world’s largest exporters of chocolate and beer, both of which are integral parts of its cultural heritage. Belgium's economy is driven by trade, with its strategic location making it a gateway to Europe. The country is also home to renowned institutions in art, design, and education, and its cities, such as Brussels, Antwerp, and Bruges, attract millions of tourists every year. Belgium is committed to sustainability and plays an active role in European and global environmental efforts.",
                "capital": "Brussels",
                "largestCity": "Brussels",
                "languages": "Dutch (official), French (official), German (official), with regional dialects",
                "government": "Federal parliamentary constitutional monarchy",
                "currency": "Euro (EUR)",
                "economy": "Manufacturing, technology, services, chocolate, beer, tourism",
                "famousFor": "Chocolate, waffles, beer, comic books (e.g., Tintin), medieval towns, European Union",
                "additionalInfo": "Belgium is a founding member of the European Union, NATO, and the United Nations. The country is known for its political complexity, with a federal structure that includes three language communities: Dutch, French, and German. Belgium's central location makes it a major hub for international business and diplomacy, and its capital, Brussels, is home to the EU’s headquarters."
            },

            "ireland": {
                "name": "Ireland",
                "intro": "Ireland, an island nation located in the North Atlantic, is known for its lush green landscapes, rich cultural heritage, and historical landmarks. Famous for its stunning coastlines, traditional music, and folklore, Ireland offers a blend of natural beauty and vibrant cities. The country’s deep history, from ancient monuments to its more recent literary and artistic contributions, has shaped its distinct identity.",
                "image": "assets/countries/Ireland-1.png",
                "addImg1": "assets/countries/Ireland-2.png",
                "addImg2": "assets/countries/Ireland-3.png",
                "description": "Ireland has a highly developed economy, with a focus on industries such as technology, pharmaceuticals, and finance. Dublin, the capital, is a major European hub for multinational companies, particularly in tech and finance. The country's economy has grown rapidly in recent decades, driven by foreign investment and a strong export sector. Ireland is also known for its strong education system and high standard of living. Its vibrant culture, including literature, music, and sports, is celebrated globally, and its unique landscapes, including cliffs, mountains, and rolling green fields, make it a popular travel destination.",
                "capital": "Dublin",
                "largestCity": "Dublin",
                "languages": "Irish (official), English (official)",
                "government": "Parliamentary republic",
                "currency": "Euro (EUR)",
                "economy": "Technology, pharmaceuticals, finance, agriculture, tourism",
                "famousFor": "Guinness beer, Irish whiskey, traditional music, St. Patrick's Day, folklore, literature",
                "additionalInfo": "Ireland is a member of the European Union, and its economy has seen strong growth, particularly in tech and pharmaceuticals, due to low corporate tax rates and favorable business policies. The country has a rich literary history, with famous writers like James Joyce, W.B. Yeats, and Samuel Beckett. Ireland also offers a high quality of life, with beautiful natural landscapes and a robust healthcare system."
            },

            "united kingdom": {
                "name": "United Kingdom",
                "intro": "The United Kingdom (UK), located off the northwest coast of mainland Europe, is a sovereign country known for its history, culture, and global influence. From the iconic Big Ben in London to the rugged Highlands of Scotland, the UK offers a diverse range of landscapes, cultural landmarks, and a rich heritage. It has played a pivotal role in global politics, economics, and culture for centuries, and continues to be a major player on the world stage.",
                "image": "assets/countries/UK-1.png",
                "addImg1": "assets/countries/UK-2.png",
                "addImg2": "assets/countries/UK-3.png",
                "description": "The UK has one of the largest and most developed economies in the world, with strengths in finance, manufacturing, technology, and services. London, the capital, is a global financial center, while cities like Manchester, Birmingham, and Edinburgh are hubs for innovation, education, and culture. The UK is a permanent member of the United Nations Security Council, a founding member of NATO, and has played a leading role in the creation of institutions like the European Union and the Commonwealth of Nations. The UK is also renowned for its educational institutions, such as the University of Oxford and the University of Cambridge.",
                "capital": "London",
                "largestCity": "London",
                "languages": "English (official), Welsh, Scots Gaelic, Irish",
                "government": "Constitutional monarchy with a parliamentary system",
                "currency": "Pound Sterling (GBP)",
                "economy": "Finance, manufacturing, technology, services, tourism",
                "famousFor": "The Beatles, Big Ben, Buckingham Palace, football (soccer), tea, historical landmarks",
                "additionalInfo": "The UK is a permanent member of the UN Security Council and was a founding member of the United Nations and NATO. The country’s monarchy is one of the oldest in the world, and it has a long tradition of scientific innovation, including the Industrial Revolution. Despite its historical significance in Europe, the UK left the European Union in 2020 following the Brexit referendum, which has reshaped its political and economic landscape."
            },

            "luxembourg": {
                "name": "Luxembourg",
                "intro": "Luxembourg, a small landlocked country in Western Europe, is known for its high standard of living, wealth, and political stability. Despite its small size, Luxembourg plays an important role in the global financial sector and European politics. The country is famous for its medieval castles, rolling hills, and picturesque landscapes, making it a unique blend of urban sophistication and natural beauty.",
                "image": "assets/countries/Luxembourg-1.png",
                "addImg1": "assets/countries/Luxembourg-2.png",
                "addImg2": "assets/countries/Luxembourg-3.png",
                "description": "Luxembourg has a highly developed economy, with strengths in finance, steel, and industrial sectors. The country is one of the wealthiest in the world, with a high GDP per capita. Luxembourg is a founding member of the European Union, NATO, and the United Nations, and its capital, Luxembourg City, is a major financial hub. The country is also known for its multilingual population, with Luxembourgish, French, and German all used in official capacities. Luxembourg places a strong emphasis on education and innovation, making it a great place for business and research.",
                "capital": "Luxembourg City",
                "largestCity": "Luxembourg City",
                "languages": "Luxembourgish, French, German",
                "government": "Constitutional monarchy",
                "currency": "Euro (EUR)",
                "economy": "Finance, steel, industry, services",
                "famousFor": "Wealth, finance, medieval castles, European Union headquarters, Luxembourg Gardens",
                "additionalInfo": "Luxembourg is one of the smallest countries in Europe, but it plays a major role in European and global finance. It has a highly skilled, multilingual workforce and is known for its political neutrality and stability. The country’s location at the heart of Europe makes it an ideal base for international business. Luxembourg also has a reputation for being a green and sustainable nation, with initiatives to promote renewable energy and environmental protection."
            },

            "netherlands": {
                "name": "Netherlands",
                "intro": "The Netherlands, often referred to as Holland, is a country located in Western Europe, known for its flat landscape, extensive canal systems, windmills, and tulip fields. With its vibrant cities, rich cultural heritage, and progressive society, the Netherlands has long been a center for art, science, and trade. The country's reputation for high-quality living, sustainability, and innovation makes it one of the most admired nations in Europe.",
                "image": "assets/countries/Netherlands-1.png",
                "addImg1": "assets/countries/Netherlands-2.png",
                "addImg2": "assets/countries/Netherlands-3.png",
                "description": "The Netherlands has a highly developed economy, driven by industries such as technology, agriculture, and trade. The country is one of the world’s largest exporters of goods, particularly in sectors like machinery, chemicals, and food products. Amsterdam, the capital, is a major global financial hub, while cities like Rotterdam and The Hague are known for their international importance in shipping, law, and diplomacy. The Dutch are also known for their progressive views on social issues, including environmental sustainability, LGBT rights, and drug policies.",
                "capital": "Amsterdam",
                "largestCity": "Amsterdam",
                "languages": "Dutch (official), Frisian",
                "government": "Constitutional monarchy",
                "currency": "Euro (EUR)",
                "economy": "Technology, trade, agriculture, manufacturing, tourism",
                "famousFor": "Windmills, tulips, canals, cheese, cycling, progressive politics",
                "additionalInfo": "The Netherlands is a founding member of the European Union, NATO, and the World Trade Organization. The country is known for its strong economy, high quality of life, and commitment to environmental sustainability. The Netherlands has also made significant contributions to art and science, being home to famous painters like Vincent van Gogh and Rembrandt. Amsterdam is famous for its historical canals, world-class museums, and liberal culture, making it a popular destination for tourists from around the world."
            },

            "china": {
                "name": "China",
                "intro": "China, located in East Asia, is the world's most populous country and a global powerhouse in terms of economy, politics, and culture. With its ancient history, rich traditions, and rapid modernization, China is a unique blend of old and new. The Great Wall, the Forbidden City, and the Terracotta Army are just a few of the country's iconic landmarks, while cities like Beijing, Shanghai, and Hong Kong represent a mix of history, technology, and commerce.",
                "image": "assets/countries/China-1.png",
                "addImg1": "assets/countries/China-2.png",
                "addImg2": "assets/countries/China-3.png",
                "description": "China has the second-largest economy in the world, with strengths in manufacturing, technology, and trade. The country is a global leader in industrial production, export, and infrastructure development. It is also a major player in international politics, with a permanent seat on the United Nations Security Council. The nation's rapid economic growth in the last few decades has lifted millions out of poverty and made China a global economic and technological leader. The country's rich cultural heritage includes Confucianism, Chinese opera, and traditional Chinese medicine.",
                "capital": "Beijing",
                "largestCity": "Shanghai",
                "languages": "Mandarin Chinese (official), with various regional dialects",
                "government": "Single-party socialist republic",
                "currency": "Renminbi (RMB), also known as the Chinese Yuan (CNY)",
                "economy": "Manufacturing, technology, agriculture, trade, services",
                "famousFor": "Great Wall of China, Forbidden City, Terracotta Army, Chinese cuisine, pandas, silk",
                "additionalInfo": "China is a permanent member of the United Nations Security Council and a major global player in trade, investment, and innovation. The country has made significant strides in technology and infrastructure, including leading in the fields of telecommunications, e-commerce, and artificial intelligence. China is also the world's largest carbon emitter but has made major efforts to invest in renewable energy and environmental conservation. The country's diversity is reflected in its 56 ethnic groups and vast geographical regions, from bustling megacities to remote rural areas."
            },

            "south korea": {
                "name": "South Korea",
                "intro": "South Korea, officially known as the Republic of Korea, is located in East Asia, on the southern part of the Korean Peninsula. Known for its technological advancements, vibrant culture, and rich history, South Korea has become a global leader in electronics, entertainment, and innovation. From the bustling streets of Seoul to the serene landscapes of Jeju Island, South Korea offers a unique blend of modernity and tradition.",
                "image": "assets/countries/korea.png",
                "addImg1": "assets/countries/korea-2.png",
                "addImg2": "assets/countries/korea-3.png",
                "description": "South Korea boasts one of the world’s most advanced economies, with strengths in industries like electronics, automotive, and steel manufacturing. Companies like Samsung, Hyundai, and LG have made South Korea a global powerhouse in technology and innovation. Seoul, the capital, is a major financial and cultural hub, known for its cutting-edge technology, fashion, and food. South Korea is also famous for its influence in global pop culture, especially through K-pop and Korean cinema, which have gained worldwide popularity. The country's rich history and cultural heritage, including traditional temples, palaces, and hanbok (traditional clothing), are integral to its identity.",
                "capital": "Seoul",
                "largestCity": "Seoul",
                "languages": "Korean (official), with a few dialects in different regions",
                "government": "Presidential republic",
                "currency": "South Korean Won (KRW)",
                "economy": "Electronics, automotive, shipbuilding, petrochemicals, steel, tourism",
                "famousFor": "K-pop, Korean food (kimchi, bibimbap), electronics (Samsung, LG), fashion, technology",
                "additionalInfo": "South Korea is one of the most digitally connected countries in the world, with high-speed internet access and advanced digital infrastructure. It is a member of the United Nations, the World Trade Organization, and the Organisation for Economic Co-operation and Development (OECD). South Korea’s education system is known for being highly competitive, and the country places great importance on innovation, research, and technology. The nation is also recognized for its thriving entertainment industry, with K-pop, Korean dramas, and films achieving international acclaim."
            },

            "kazakhstan": {
                "name": "Kazakhstan",
                "intro": "Kazakhstan, the largest landlocked country in the world and the ninth-largest by land area, is located in Central Asia. Known for its vast steppes, rich natural resources, and a growing economy, Kazakhstan is a key player in the region. The country combines a rich cultural heritage with rapid modernization, and is home to diverse ethnic groups, stunning landscapes, and a growing influence in global politics and economics.",
                "image": "assets/countries/Kazakhstan.png",
                "addImg1": "assets/countries/Kazakhstan-2.png",
                "addImg2": "assets/countries/Kazakhstan-3.png",
                "description": "Kazakhstan has a resource-rich economy, primarily driven by oil, gas, mining, and agriculture. The country is the world’s largest exporter of uranium and also holds vast reserves of oil and natural gas. Kazakhstan's economic growth in recent decades has been impressive, with a focus on diversification and innovation. The capital city, Nur-Sultan (formerly Astana), is known for its modern architecture and is a political and economic hub. Kazakhstan is also working to develop its infrastructure, education, and technology sectors, with an emphasis on sustainability and green energy. The country’s culture is a mix of Central Asian, Russian, and Turkic influences, with a long history of nomadic traditions.",
                "capital": "Nur-Sultan",
                "largestCity": "Almaty",
                "languages": "Kazakh (official), Russian (widely spoken)",
                "government": "Presidential republic",
                "currency": "Kazakhstani Tenge (KZT)",
                "economy": "Oil, gas, mining, agriculture, manufacturing",
                "famousFor": "Great Steppe, Altai Mountains, traditional yurts, Kazakh horse culture, mineral resources",
                "additionalInfo": "Kazakhstan is a member of the United Nations, the Shanghai Cooperation Organization (SCO), and the Eurasian Economic Union (EAEU). The country has made significant strides in renewable energy, particularly wind and solar power, and has ambitious plans to reduce its reliance on fossil fuels. Kazakhstan also plays a major role in international diplomacy and trade, with growing ties to both Eastern and Western powers. The country's vast landscapes are home to unique wildlife, including snow leopards, saiga antelopes, and numerous bird species."
            }

};
       // Get country from URL query parameters
        const urlParams = new URLSearchParams(window.location.search);
        const country = urlParams.get('country'); // Example: "switzerland"

        if (country && countryData[country]) {
            const data = countryData[country];
            // Update page with country data
            document.getElementById("country-name").innerText = data.name;
            document.getElementById("country-character").innerText = data.name[0];  // Show first letter
            document.getElementById("country-intro").innerText = data.intro;
            document.getElementById("country-image").src = data.image;
            document.getElementById("add-img-1").src = data.addImg1;
            document.getElementById("add-img-2").src = data.addImg2;
            document.getElementById("country-description").innerText = data.description;
            document.getElementById("country-facts").innerHTML = `
                <p><strong>Capital:</strong> ${data.capital}</p>
                <p><strong>Largest City:</strong> ${data.largestCity}</p>
                <p><strong>Official Languages:</strong> ${data.languages}</p>
                <p><strong>Government:</strong> ${data.government}</p>
                <p><strong>Currency:</strong> ${data.currency}</p>
                <p><strong>Economy:</strong> ${data.economy}</p>
                <p><strong>Famous For:</strong> ${data.famousFor}</p>
            `;
            document.getElementById("additional-info").innerText = data.additionalInfo;
            document.getElementById("location-name").innerText = data.name;
            document.getElementById("country-name-again").innerText = data.name;
        } else {
            // Fallback if country data is not available
            document.getElementById("country-name").innerText = "Country not found";
            document.getElementById("country-intro").innerText = "Sorry, the details for this country are unavailable.";
        }

   // Function to redirect user to the country's study page
function redirectToCountryPage(country) {
    // Convert the country to lowercase to match the URL format
    const countryUrl = country.toLowerCase();

    // Redirect to the appropriate page for the selected country
window.location.href = `detail.html?country=${countryUrl}`;
}

document.querySelectorAll(".allPaths").forEach(e => {
    e.setAttribute('class', `allPaths ${e.id}`);

    e.addEventListener("mouseover", function () {
        // Get the current country ID (e.g., "Afghanistan", "Switzerland")
        const countryId = e.id;

        // Highlight the country by changing its fill color
        e.style.fill = "lightgreen"; // Change the color to your desired hover color

        // Update tooltip with the country name and move it with the mouse
        window.onmousemove = function (j) {
            const x = j.clientX;
            const y = j.clientY;
            const tooltip = document.getElementById('name');

            // Get current scroll position and adjust the tooltip position relative to the viewport
            const scrollY = window.scrollY || document.documentElement.scrollTop;

            // Position the tooltip closer to the mouse, adjusted for scrolling
            tooltip.style.top = y + 10 + scrollY + 'px';  // Add scroll offset
            tooltip.style.left = x + 10 + 'px';  // Slight offset to the right of the mouse
        }

        // Make the tooltip visible and set the country name
        document.getElementById("name").style.opacity = 1;
        document.getElementById("namep").innerText = countryId;  // Set the country name in the tooltip
    });

    e.addEventListener("mouseleave", function () {
        // Reset the country fill color when mouse leaves
        e.style.fill = "#ececec";  // Reset to default color (light gray)

        // Hide the tooltip when mouse leaves
        document.getElementById("name").style.opacity = 0;
    });

    // On click, redirect user to the study page for the clicked country
    e.addEventListener("click", function () {
        redirectToCountryPage(e.id);  // Uncomment if you have the function for redirection
    });
});
