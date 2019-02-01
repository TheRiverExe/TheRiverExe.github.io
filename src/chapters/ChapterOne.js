import React, { Component } from 'react';
import { Button, Container, Header, Image, List, Segment } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';

import img1 from "../media/one/one.JPG";
import img2 from "../media/one/two.JPG";
import img3 from "../media/one/three.JPG";
import img4 from "../media/one/four.JPG";
import img5 from "../media/one/five.JPG";
import img6 from "../media/one/six.JPG";
import img7 from "../media/one/seven.JPG";

class ChapterOne extends Component {
    render() {
        return (
            <div>
                <br />
                <Image src={img1} fluid rounded />
                <Segment vertical>
                    <Header as="h4" textAlign="center" color="grey">Waddlesdown, near Exeter. June 2016.</Header>
                </Segment>
                <Header as="h1">Chapter One.</Header>
                <p>Introduction.</p>
                <p className="quote">"When you are old and grey and full of sleep, and nodding by the fire, take down this book, and slowly read, and dream of the soft look. Your eyes had one, and of their shadows deep". "When you are old".</p>
                <p className="quote-credit">William Yeats.</p>
                <p>So far as I know, Bimbling doesn't appear to mean anything other than to walk or travel at a leisurely pace. It is for someone like me, the preferred choice when out and about. It brings to the fore all the senses and concentrates the mind in the moment, rather than focusing too much on the destination. It's less hurried pace suits those, who by nature and inclination, are apt to wander and be open to the random possibilities that so often present themselves. The chance discovery of something engaging swiftly becomes incorporated into a revised plan. Talking to friends about bimbling, has revealed, that I am apparently not the only person in the world to have stumbled on this approach to venturing outdoors. They too, recount how some of their favourite memories arose quite by chance and opportunity. Eagerly account is given of having taken a random turn into a passageway, which in turn led to some unexpected gem or incidental curiosities. They happily describe their delight in finding themselves off the beaten track, which added some sense of drama or offered an interesting encounter. It doesn't always work out like that, of course, and spontaneity can lead to dead ends, muddy lanes or through places that seem less inspiring or challenging. However, even the most rigid adherence to plans can face similar difficulties. Perhaps, my more relaxed attitude stems from my current favourable circumstances. Having reached the milestone of semi-retirement and happily survived thus far, there was and is, the welcome prospect ahead of more free time ahead to Bimble. It helps that I have an abiding interest in exploring places and learning about the history of the landscape.</p>
                <p>Delving into all manner of bookshops has led to the discovery that earlier travellers along the banks of the Exe (and for that matter other Devon rivers) similarly adopted a bimbling style to their venture. Several of these have stood out and will get a mention in this book, but I will start with Rambles in Somerset (1912), which sets out as good a description of bimbling as I have come across. It also relates to Exmoor, which is where the river and this odyssey began. “An Exmoor ramble should be an impromptu sort of entertainment, not a cut-and- dried affair planned on the direction of a guide-book. The spirit of the moor is the spirit of an almost irresponsible freedom which carries you at the whim of the moment anywhere across the heather “(1). I feel sure The Exmoor Rescue Service might raise a slight eyebrow at this statement today, but bimbling doesn't preclude common sense and care. Perhaps, at its best, the bimblers simply embraces the opportunities, great and small, to notice, learn and value what is around them.</p>
                <p>This brings me onto my second, but more contemporary book, The Great Explosion, by Brian Dillon (2). He wrote, that his growing awareness and appreciation of his surroundings and finding interest in them, proved a turning point in his recovery from Depression. It marked an emergence from a hitherto "sullen indifference" to his adopted county of Kent. He found that even in the dullest of estates and drab landscapes, there was a gift in his burgeoning appreciation, for the past shadows and imprints of their history and stories. He became interested in the small details and objects of everyday life revealing something of the Human experience. This awakening of consciously noticing and learning from the rich offerings of everyday life in his own neighbourhood, combined with a spirit of wandering appears to have served him well. In the course of my bimbles along the Devonshire landscape, has been the discovery of so many places that have attached to me some special worth or evocation. One such haven is a place I call, somewhat unimaginatively, <b>Reservoir Hill</b>, because it holds just that, buried beneath its thin skin of grasses and wild flowers. Sunk deep into the soil and bedrock below and closed with steel lids, the reservoir serves as a marvellous platform upon which to survey the landscape. Looking at the map, the hill doesn't appear to have a name that I can find, but it is there as much in my knowledge of the area, as in my mind’s eye. As I write this, I can conjure up the images of the wooded rise and falls of the Crediton Hamlets in the distance. I can recall the criss-cross of ancient hedgerows across the valleys with farmsteads nestling on their slopes. In the far distance, the high undulating moors with a glimpse of their rocky outcrops on the horizon.</p>
                <p>The nearest identifiable landmark to Reservoir Hill, is the transmission mast, standing atop <b>Waddles Down</b>. If the idea of a transmission mast puts you off, I recommend you go there and stand by the farm gate next to the old oak tree. From there, the mast will be behind you, whilst before you will be an uninterrupted panorama of The Exe Estuary and the open sea of Lyme Bay beyond. It has few rivals in the viewing department, but for me, Reservoir Hill offers a sense of intimacy. It is where I recall the sight of birds of prey, one fine hot summer's afternoon, soaring effortlessly high and low above the landscape. They flew adrift and adroit on the thermal ebbs and falls. The manner in which they glided meant that they were able to observe more carefully and discern things of interest that might so easily be missed in a more hurried fashion. Bimbling has some element of this, as I discovered some years ago. I was cycling through the East Devon village of Lympstone. By good fortune, I came across a poem in a porch window along Sowden Lane. If people consider placing a choice poem on display from their house or garden, they could do no better than 'Days', that short exquisite contemplative poem by Philip Larkin (3). Opening with the question about the meaning of days, it alludes to the broader question on the nature of our very existence. It struck a chord with me, at the time and still does, about the measure, value and importance of each day. In our short “summer of a dormouse" existence, the choices we make about how best to use each day is a valuable lesson. It doesn’t have to be complicated either. As I cycled the rest of the way to Exmouth, I reflected on the poem and the choices I had made in how I might spend this day. Cycling to see my Parents seemed to have been the product of two good intuitive decisions that gave some shape and value to the day. The choice of cycling derived part of its enjoyment from the slow pace this heavy-duty Pashley Roadster bike will only permit. It is made for cruising, not for speed. It is in effect, a bimblers bike. On a hill, I can get off and push the bike without having to offer any justification. Only a masochist or a sadist would disapprove, whereas, in my experience, most people express some solidarity. On a couple of occasions, kindly motorists have actually stopped to ask if I needed a lift, proving there are good Samaritans out there. On the flat, or downhill position, its high seat and handlebar position, provides a fine cockpit view across the countryside. The springy seat allows the temporary assurance of some comfort on long journeys for older bones and muscles. Most of all, my beloved bike has a distinctive old worldly character, that makes it as much a companion as a workhorse on country jaunts or commuting to work. I write this partly as a debt of gratitude to a dear colleague and friend, Peter Freestone. It was his sage advice that led to me purchasing this bike and at an opportune time, when I was coming up to semi-retirement. It has been entirely complimentary. The slow leisurely pace I adopt on the bike has enabled me to cycle far and wide, on any number of pleasant day trips. At times, I slow the pace down further, or dismount and walk. This slowing down, consciously seeks to allowed the fullest appreciation of the landscape in all its moods. On those occasions, when home-coming has been rewarded with the spectacle of sunsets over the Haldon Hills, I have often wished for the clock to stop.</p>
                <Image src={img2} fluid rounded />
                <Segment vertical>
                    <Header as="h4" textAlign="center" color="grey">Glebe Wood. Spring 2016.</Header>
                </Segment>
                <br />
                <p>The same wistfulness is repeated each year, in the calm ambience and dappled shade of <b>Glebe Wood</b>. In spring, the woodland floor bursts into life with its perennial bluebell harvest of scent and colour. I would gladly linger. If ''days are to be happy in'' as Larkin wrote, then I can think of no better times and places. Both have provided me with a rich treasure trove of vivid memories. I hold them in store, of balm and good antidote, to the times when days are more frenetic and challenging. In the same vein, this brings to mind, one particular day in June 2015 that has sown the seeds for this book. I had pulled into the lay-by at <b>Exe Head Bridge</b> and remember thinking that no day could be finer and no time more precious. I had arrived in the spirit of pilgrimage to the source of The River Exe. The circumstances for a walk were entirely favourable and I felt in state of glorious liberation. The day was young and the day was mine. Gathering my things eagerly from the boot of the car, I decided that it was tee-shirt weather and dispensed with the thought of carrying my coat and fleece. If the mood of the day changed, it was just my rucksack, packed with a small picnic, trusty camera, a crumpled book, swim shorts and towel for company and protection. I was intent upon walking up to <b>Exe Head</b>, the source of The River Exe and from there, planned to go for a swim at nearby Pinkery Pond. The crumpled book lurking at the bottom of my ruck-sack was ‘The Exe’ by Rod Lawrence (4). I confess, that it was a book to which, I had paid little attention in the past. I bought it as a passing whimsy, noticing the title had the words, River Exe and thought it might be of some interest. I'm sure I looked through it briefly on the day of the purchase, before putting it into one of the bookshelves and there it had lain for several years, largely undisturbed. Luckily, it was the serendipitous re-discovery of this book that helped inspire me to make the expedition to Exe Head. Sitting down in my armchair, I opened the book up and began to read the introduction. I was struck by a couple of things, Rod Lawrence wrote. The first was that his odyssey had taken place in June 1985, thirty years previously. I don't quite know why I attached any importance to this, but it just seemed interesting at the time. More importantly, I warmed to his description of a childhood affinity with the river and the estuary. In this, I sensed a kindred spirit and connection, not only with his evocation of memories of the estuary, but also my latent desire to explore the river more fully. Rod Lawrence’s childhood memories included a description of wading out into the estuarine mudflats near Starcross and getting stuck in the sticky oily mud. He recalled having to walk back to his Grandparents, minus his wellies and put me in mind of many a battle with the mudflats on the other side of the Exe Estuary. For a time, the creek behind the back of Camperdown Terrace in Exmouth was one of our favoured family playgrounds. From here, my Father would launch the rowing boat from the slipway, into the lapping high tide water and we would row around the little bay. I recall my Grandfather, Norman and his older brother, Arthur Conridge, taking turns to row the boat with us, children, acting as passengers or swimming alongside.</p>
                <p>The estuary aside, I have not by comparison, experienced the effects of the flooding on my small terraced house in St Thomas, Exeter, which lies close to the River Exe. This appears to have befallen his Aunt and Uncle, who lived in the same locality as I do now. In 1960, whilst he was staying with them, he witnessed the full impact of the rising waters. I have witnessed the ferocity and surge of the river in times of flood, flowing sometimes too high for my comfort, in proximity to my house. However, as a home-owner, I have long acknowledged with gratitude the Flood Protection Scheme, which came in the wake of the 1960 Flood. The river in flood is mercifully, but one of its many moods and more often than not it appears benign and placid. On fine days, a walk or cycle along the riverside provides for a pleasant excursion. On countless occasions, I have cycled down to Topsham and sat on one of the benches along Goats Walk and enjoyed the spectacle of The Exe Estuary. This is where the Exe merges with the tidal waters of the sea beyond. There is something very uplifting about the sight of the glimmering surface of the water stretching all the way down to the mouth of the estuary. Beyond its narrow mouth lies the open sea of Lyme Bay. I can only assume that Rod Lawrence has on some occasions sat on one of the same benches as me or enjoyed much the same view. His description of "that ever-changing silver ribbon of water “is something with which, I can very much relate. It is a childhood image to which he returned in adulthood and set about reacquainting himself with the river and the estuary. Rod Lawrence decided, in June 1985, that it was “high time that I did a little exploring" of the higher reach of the river. Reading through the rest of the book, brought to mind the realisation, that many of the places he described were pretty much ‘Terra Incognito’. I felt the impulse to remedy this situation. If I could start from Exe Head, the cradle of the river, I could in time follow its course down to the sea. This would allow me to piece together these unknown stretches with the parts of the river with which I was more familiar.</p>
                <Image src={img3} fluid rounded />
                <Segment vertical>
                    <Header as="h4" textAlign="center" color="grey">The Exeter Canal near to Topsham. January 2017.</Header>
                </Segment>
                <Header as="h1">The River Exe.</Header>
                <p className="quote">"The change in public sentiment is, of course, largely due to increased facilities of locomotion. The motorcar and even the humble cycle have revolutionised the habit of the travelling public. They have been emancipated from the tyranny of the time table and from the unaccommodating rigidity of the railway metals, with open roads before them, people can now go when and where they please".</p>
                <p className="quote-credit">Rambles in Somerset (1912)</p>
                <p>From its rise on the high ground of Exmoor in Somerset, to its meeting with the sea in Devon, the Exe straddles two counties. The river also claims possession over the countless springs, streams and rivers that meet with its sixty-mile course towards the open sea of Lyme Bay. Indeed, the very moorland it arises from is named after the river that has long risen from Exe Head. The name given to the river may originate from the Celtic word of Isca, meaning a river abounding in salmon. This seems to have been adopted by the occupying Romans, who referred to the fledgling settlement of what is today known as Exeter, as Isca Dumnoniorum. Out if this, the Exe has found its name in common parlance and adopted over many hundreds of years for the variety of place names of settlements that have grown up in and around the course of the river. Looking at a map of the river, many place names bear witness to a direct feature associated with the river. Exford, Exebridge and Exmouth seem self-explanatory. The seaside town of Exmouth lies at the mouth of the Exe Estuary and is a place where much of my life has been entwined. In childhood, the river was something I barely noticed, as it was the sea and the estuary that loomed much larger in my outdoor play area. If I try and extract any memory of the river as a child, it is confined to a vague memory of Mr Douglas, our Latin Teacher, taking our small group of us, Choristers, for a walk to the recreational park near Salmon Pool Bridge in Exeter, but that is about the extent of it.</p>
                <Image src={img4} fluid rounded />
                <Segment vertical>
                    <Header as="h4" textAlign="center" color="grey">Messing about on Cockle Sands, Exmouth 1969.</Header>
                </Segment>
                <br />
                <p>For the most part, my earliest connection with the river was where it entered into The Exe Estuary and made its farewell bow to the sea. Here the mudflats and sandbanks of the estuary bordering Exmouth, unveiled or hid themselves with the rise and fall of the tides. As the water receded, the exposed rippled sandbanks, shallow pools and channels became our newly claimed playground. This had to be surrendered as the incoming tide inexorably reclaimed its underwater kingdom and we children, gradually retreated to the shoreline of Shelley Beach. In this hinterland, the cluster of little man-made coves formed by the sea defences, became the prized bastion to the incoming tide. In the golden embrace of a fine Summer's evening, with a sunset settling down over the Haldon Hills, I can still recall the sheer pleasure of being alive in the thrall of the moment. Imagining that we could save the sandcastle and its surrounding ramparts from being engulfed by the water and the sweet surrender met with laughter and a final swim. It was here, in home-made woollen pants that I learnt as a young boy to swim. It was on these sandy beaches, that I discovered the great pleasure in beach-combing. My memory of den making is instantly rekindled by the dank-smelling sand that lay beneath upturned boats, that formed our temporary shelters. From the edge of the seashore, we would help each-other to clamber onto the family friends’ boat taking us to communal barbecues and play amongst the dunes on the nearby Dawlish Warren. In later years, I would canoe with my friends, Miles, Andrew, Ralph and Nigel to Dawlish Warren and camp nearby to the spot where in the 1920's and 1930's, my Maternal Great Grandparents had had a beach chalet, now long ago vanished.</p>
                <p>Shelley Beach was also where, for a short period in the late 1960's our Parents brought us to stay in one of the chalets that made up something of a makeshift colony, complete with little paths and courtyards, running between the chalets and leading down to the little beaches. I can still recall the nearby dock filled with large ships and the industry of unloading and taking on their cargo. The dock was dominated by the grain silos, the boatyard and timber mills and nearby, the general stores, Dixon's Boat Chandlery and Fishmongers. The pier was a platform to inspect the wriggling fish caught by local fisherman and watch as passengers made their way down the boarding ramp to the Starcross ferry.</p>
                <Image src={img5} fluid rounded />
                <Segment vertical>
                    <Header as="h4" textAlign="center" color="grey">Family gathering at Dawlish Warren. Early 1970’s.</Header>
                </Segment>
                <br />
                <p>By the late 1960’s, we moved to a large Edwardian house in Gussiford Lane, further up in the town and the shift in my childhood playground moved to the Madeira Walk Plantations, the Maer, and the sea front along The Esplanade stretching all the way down to Orcombe Point. As I grew more independent, the cliffs overlooking Lyme Bay and the countryside around the town also became my roaming country with friends on walks or cycle trips. From Woodbury Castle, a regular haunt, I could as now survey the estuary and its westerly settlements of Cockwood, Starcross and Dawlish, nestling on the slopes of Haldon Hill in the background. Much has changed of the landscape of Exmouth of my youth, including the development of Shelley Beach into a marina and upmarket residential area. There remains the familiar sound of the railways in the background and the essential character of the sea and the estuary.  In Fatherhood and work, I moved to Exminster and noted the tandem water courses of the Exeter Canal and the river as it met with the Exe Estuary. In summertime, I would take my children down to the marshes and make our way across the ferryman's crossing to Topsham. At other times, with family and friends’, we would cycle or walk down to the Turf Locks Hotel at the mouth of the canal and watch the river merge with the large expanse of the estuary. In later years, I have moved to St Thomas in Exeter and reigned in my natural impulse to swim in the nearby river (constrained by a modern-day convention, that it’s just not “the done thing”) and contented myself with the need to cross it. From there on, my knowledge of the river extended to Bramford Speke a few miles upriver from Exeter. Here, swimming is almost part of the DNA of the village community and where on many occasions, I took a dip even before I became aware that it gets a mention in the Bible for all Wild Swimmers, namely that of Roger Deakin's, Waterlog (5). Beyond, this I was very familiar with a delightful place called Cove just a few miles upriver from Tiverton and it was here, with one of my oldest friends, Giles Cox, that we, would take our children swimming and messing about in the water and it is to all of these places I shall return in the book.</p>
                <Image src={img6} fluid rounded />
                <Segment vertical>
                    <Header as="h4" textAlign="center" color="grey">Bramford Speke. River Exe. Summer 2015.</Header>
                </Segment>
                <br />
                <p>My infrequent travels towards North Devon and Exmoor, along the Exe, amounted to brief appreciative glimpses, as I drove up the Exe valley and matters might have stayed there, had it not been for a conversation with my Parents. They mentioned having gone up to have a look at Exe Head, in order to see where the river began and this also sowed the idea that someday, I should like to do the same. When, the moment came, on this sublime June day, I arrived with a passion for Photography, Devonshire History and noble pursuit of Wild Swimming. All of these interests, I thought would be nice to include in a reflective journal, something that might be taken down from the bookshelf and read by the fire. In these pages and photographs, I might recall “the soft look” and “their shadows deep”. I would be wryly reminded that the walk took considerably less time to complete, than it had taken to put the final full stop on the last chapter in this book. I would recall the great pleasure in exploring the places visited and my encounters with the many delightful people I met along the way. The friendship it has forged with my river walking companion, Charles Dixon, whom you will meet in Chapter Three. Here then, is my account of the journey as it unfolded along the length of The River Exe, forged over a number of years and blessed in company of others. It draws on autobiographical reflections and things that are or have come to be of interest to me. I hope the book is richer for this layer of dust to the finish. In all things, this is a celebration of the Life, I have shared with the river and the knowledge derived from travelling alongside it.  </p>
                <Image src={img7} fluid rounded />
                <Segment vertical>
                    <Header as="h4" textAlign="center" color="grey">Rodney Bay, Exmouth. October 2016.</Header>
                </Segment>
                <br />
                <List>
                    <List.Item as="h5">(1) Rambles in Somerset. G.W. Wade & J.H. Wade. (1912)</List.Item>
                    <List.Item as="h5">(2) The Great Explosion. Gunpowder, the Great War and a disaster on the Kent Marshes. Brian Dillon (2015).</List.Item>
                    <List.Item as="h5">(3) The Whitsun Weddings. Philip Larkin (1964).</List.Item>
                    <List.Item as="h5">(4) West Country Rivers. The Exe. A River for wildlife. Rod Lawrence (1991)</List.Item>
                    <List.Item as="h5">(5) Waterlog. A Swimmers journey through Britain. Roger Deakin (2000).</List.Item>
                </List>
                <br />
                <Container textAlign='center'>
                    <Button basic circular icon='chevron right' as={NavLink} to='/two' />
                </Container>
                <br />
            </div>
        );
    }
}

export default ChapterOne;
