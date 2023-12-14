import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCarSide, faKey} from '@fortawesome/free-solid-svg-icons'

import Pair from "Components/Pair/Pair"
import 'App.scss';

function App() {
    return (
        <div id="app">
            <section className="container">

                <br/>

                <div>
                    <b>Remote Keyless Entry (RKE)</b> systems such as cars and garage doors allow us to remotely lock or
                    unlock our belongings. With car keys, whenever we press a button to lock or unlock,
                    our key broadcasts a signal out into the open, hoping that our car is in range to hear.
                    But how are these systems secured?
                </div>

                <br/>

                <Pair kioskMode={true} openSesame/>

                <br/>

                <div>
                    Back in the days, these sent codes were usually <b>fixed</b> and even unencrypted.
                    Upon each button press, the <b>same</b> signal would be broadcasted to either lock or unlock our
                    car.
                    As you might have guessed, this kind of implementation led to a huge security risk. With so-called
                    replay attacks, any attacker could try and grab a code to make use of it!
                </div>

                <br/>

                <div>
                    Also, trying to <b>brute-force</b> all possible combinations for
                    such codes was possible and therefore increased the
                    risks for fixed code systems. Even in the <b>year 2000</b> there were Mercedes Benz vehicles
                    that to that date still counted on fixed code RKE systems.
                </div>

                <hr/>

                <div>
                    <b>Rolling Code</b> is a system used to secure keyless entry systems.
                    Instead of using the same passcode every time, Rolling Code systems generate
                    <b> single-use passcodes</b>, so that <b>no passcode will be repeated or reused</b>.
                    The <b>uniqueness</b> of these sent codes greatly improves the security within such systems!
                </div>

                <br/>

                <Pair kioskMode={true}/>

                <br/>

                <div>
                    An example this is a simple counter.
                    Both the transmitter (<FontAwesomeIcon icon={faKey}/>) and receiver
                    (<FontAwesomeIcon icon={faCarSide}/>) start from 0 and will increment their counts by one.
                    Everytime we press the key, the key sends out next the number.
                    Our car will listen for these numbers and internally increment its own count whenever
                    it hears the valid number, so that no number is ever repeated.
                    <b> A passcode is only valid for one use, and will not be accepted again</b>!
                    In order for this to work, both the transmitter and the receiver must:
                </div>
                <ol>
                    <li>Agree on the same starting number (seed)</li>
                    <li>Use the same function to deterministically generate successive numbers</li>
                </ol>

                <div>This is why car keys need to 'pair' or synchronize with the car first before being usable.</div>

                <hr/>

                <h3>Pseudo Random Number Generators</h3>

                <div>
                    Instead of using a simple counter, rolling code implementations can
                    use <b>Pseudo Random Number Generators</b> (PRNGs). These PRNGs, given a seed,
                    will deterministically generate successive numbers; ideally, the generated sequence of numbers
                    will be unpredictable (ie close to random) and will be completely different given a different seed.
                </div>

                <h3>Try it out yourself!</h3>

                <Pair kioskMode={false}/>

                <h3>Why does the car have a list of numbers?</h3>

                <div>
                    The car generates a list of numbers in case we press our key button when the car
                    is not in range. Because our key generates numbers 'forward' and does not go back
                    to previous numbers, our car must keep a list of future numbers that our
                    key might send. When our key transmits a number in the middle of the list,
                    our car will invalidate all previous numbers and generate new numbers to fill the list.
                    In this simple example, if we press our key too many times, it will generate numbers beyond
                    those in our car's list, and we will be permanantly locked out.
                </div>
            </section>
            <footer>
                Credits & Sources:
                <br/>
                Template used from <a href={"https://github.com/harryli0088/rolling-code"} target={"_blank"}>
                Harry Li</a>
                <br/>
                <a href={"https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/garcia"}
                   target={"_blank"}>Some useful information about RKE Systems</a>
                <br/>
                <a href={"https://ww1.microchip.com/downloads/en/devicedoc/21143b.pdf"} target={"_blank"}>
                    HCS301 microchip implementing KeeLoq and Rolling Code
                </a>
            </footer>
        </div>
    );
}

export default App;
