import React from "react";
import Layout from "../components/Layout";
import "../styles/Programming.css";
import ResponsiveContainer from "../components/ResponsiveContainer";
import { Metadata } from "../components/Metadata";
import katex from "katex";

const Programming = () => (
	<Layout>
		<p>TODO: this page is still under construction!</p>
		<h2 id="philosophy-section-title">Programming Philosophy</h2>
		<div id="all-philosophy-section-content">
			<div id="normal-philosophy-section-content">
				<p>
					I have spent a lot of time writing code, and below are the ways in which I approach code and think about
					software development. Of course though, I&apos;m just me, and me is just one guy who has opinions that can be
					wrong, so I&apos;m of course not touting that these are optimal or anything like that. I&apos;d always be
					happy to discuss or debate these though!
				</p>
				<ResponsiveContainer responsiveWidths={[6, 6]} columnGap={"1em"}>
					<div>
						<h3>Code Is Art</h3>
						<p>
							Code has aesthetic value and should be treated as such. Writing bad code is like making bad art: it feels
							painful and wrong. Even a simple problem can be approached in a multitude of ways, and the method of
							solution feels like a window into how the author thinks.
						</p>
						<h3>Text Is Free</h3>
						<p>
							Naming things well is one of the most important tasks in programming. Using longer, more descriptive names
							costs nothing, and therefore should be done ALWAYS. How much time is saved by not typing a few keystrokes?
							I feel as though I save way more time from descriptive names because they save me so much mental effort.
						</p>
						<p>
							Full names also up-front the requisite mental effort for figuring out what a variable is and does. That
							itself is valuable.
						</p>
						<p>
							I have worked with a lot of scientific software, and it is unfortunately the worst in this regard.
							Everything is named with symbols as they appear in formulas and equations. Even if the symbol is
							well-established within the field (e.g. H for Hamiltonian in certain physics contexts), using the full
							name eliminates any ambiguity and should be what is done. If I had my way, I&apos;d even call symbols like{" "}
							<span dangerouslySetInnerHTML={{ __html: katex.renderToString("\\pi") }} /> or{" "}
							<span dangerouslySetInnerHTML={{ __html: katex.renderToString("e") }} /> something like
							&lsquo;CIRCUMFERENCE_TO_DIAMETER_RATIO&rsquo; and &lsquo;NATURAL_EXPONENTIAL_BASE&rsquo; in code, but I
							know that that battle&apos;s been lost.
						</p>
						<h3>Comments Should Answer &lsquo;Why&rsquo; and not &lsquo;What&rsquo;</h3>
						<p>
							Ideally, well written code describes what it is doing already. Good naming should play into that too. One
							should just be able to read the code to see what it is doing. Consequently, comments should be used to
							describe that which the code does not easily signify: intent. Why are things done the way they are?
							However, comments should be wielded carefully; comments are not checked for correctness and they become
							yet another part of the codebase that must be maintained. Old, or worse, wrong comments are more
							destructive than a lack of comments.
						</p>
						<h3>User Interfaces (UIs) Should Be Simple and Usable</h3>
						<p>
							While I appreciate sexy UIs as much as the next person, what I care about more is functionality. An ugly
							UI is bearable, but a broken UI is frustrating. Only after I&apos;m confident in my UI&apos;s
							functionality do I go back through and polish the visuals.
						</p>
						<p>
							I like to start with unadorned UIs, but even when polishing them, I aspire to keep them basic to some
							degree. Simplicity comes with a litany of benefits. First of all, developing a simple UI is less time
							consuming. Simple UIs also tend to be easier to parse and use. Plus, it&apos;s easiest to make simple UIs
							accessible.
						</p>
						<p>
							Software accessibility is also an important consideration. A lack of accessibility needlessly limits who
							can use an application, even though software is wondrous enough to make that a simple thing to
							accommodate. Accessibility is very much a part of usability.
						</p>
						<h3>Software Should Be Durable</h3>
						<p>
							In my mind, software durability comes through being reliable and working well. Software should also be
							able to last and consume as few resources as possible. Nothing is more frustrating than software that
							breaks for seemingly no reason; too much software manages to degrade inexplicably.
						</p>
					</div>
					<div>
						<h3>Size Matters. And So Does Performance</h3>
						<p>
							Programs should be small! There&apos;s no reason to bloat the size of programs unnecessarily. Even though
							disk space is free, it still feels yucky to take up more space than needed. Large programs also take
							longer to transfer.
						</p>
						<p>
							Speaking of transfer speeds, most websites tend to be horribly bloated. Images and media can often be
							compressed and lots of bloat can easily be removed without harming a website&apos;s functionality.
							It&apos;s boggling that payload sizes are oft left by the wayside.
						</p>
						<p>
							Most importantly, programs should run well. If something is slow in a piece of software I&apos;m creating,
							I think it&apos;s important to explicitly consider whether the time cost is strictly necessary. Slow
							software just straight up feels bad, and so time costs should be minimized whenever possible.
						</p>
						<p>
							The trend of having browsers be their own faux ecosystem makes me sad because it feels like having better
							native APIs and cross-platform wrappers would be a better solution. However, I&apos;m probably being too
							idealistic. I understand that browsers just handle so much important stuff (text for me being the biggest
							one), that it&apos;s hard to not use browsers for certain types of applications. It still feels tragic
							though that that is the state of software development.
						</p>
						<h3>Focus On the Contract</h3>
						<p>
							The art of writing code is the art of making contracts. Focusing on the contracts inherently means
							thinking about the high level design of the program before diving into the nitty-gritty. One must focus on
							making the right promises and then implementing them. For this purpose, I really like having strong type
							systems because they allow for enforcement of contracts during compilation. The contract is especially
							important because once the contract is set and in-use, it can be difficult to change. However,
							implementations are just details that can easily be changed.
						</p>
						<p>
							Semantic correctness is also something under this purview that I find important. In HTML, for example,
							tags should be used correctly and respected. Using paragraph tags for headers is wrong, even if stylized
							to match header tags. It may be the case that a user is viewing your content in a non-traditional manner
							(e.g. screen reader), in which case using the right tags may allow the user to more accurately grok the
							page. However, semantic correctness applies not just to HTML.
						</p>
						<h3>State Is Complexity</h3>
						<p>
							Keeping track of state can get very complicated. Keeping things declarative instead makes programs much
							easier to reason about. In general, I try to create programs in as much of a functional-programming
							mindset as is possible.
						</p>
						<h3>What I Want to Add</h3>
						<p>
							I really want to get into test-driven development, but I unfortunately have yet to really grasp how to do
							it well. The benefits are apparent, but I know not how to structure my code well for testing. This is
							something that I am trying to improve upon though. Oftentimes, it feels like the tests I write are not
							very general and depend heavily on my implementation, and then writing tests feels like a burden or a
							chore rather than something that is adding to my codebase. This is something that I am actively trying to
							learn though and get better at.
						</p>
					</div>
				</ResponsiveContainer>
			</div>
			<div id="hidden-philosophy-section-content" aria-hidden={true}>
				<h4>The Text Purity Proverbs</h4>
				<p>
					The enlightened individual who seeks consistency ensures that collections separated by delineators &mdash;
					including lines of a file separated by newline characters &mdash; have the delineator after the last item too.
					That is equality.
				</p>
				<p>The enlightened individual who seeks aesthetics removes unnecessary trailing whitespace. That is beauty.</p>
				<p>
					The enlightened individual who seeks semantic correctness uses tabs for indentation and spaces for alignment.
					That is meaning.
				</p>
			</div>
		</div>
	</Layout>
);
export default Programming;

export const Head = () => <Metadata />;
