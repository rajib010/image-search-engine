function regForm(){
    return`
    <main class="forms">
        <div id="form-container">
            <div class="header">
                <h2>Registeration Form</h2>
            </div>
            <form class="form" id="form">
                <div class="form-control">
                    <label for="userName">Username:</label>
                    <input type="text" id="userName" placeholder="John Doe" autocomplete="off">
                    <small></small>
                </div>
                <div class="form-control">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="john@gmail.com" autocomplete="off">
                    <small></small>
                </div>
                <div class="form-control">
                    <label for="phoneNumber">Phone Number</label>
                    <input type="number" id="phoneNumber" placeholder="98XXXXXXXX" autocomplete="off">
                    <small>Error msg</small>
                </div>
                <div class="form-control">
                    <label for="password">Password:</label>
                    <input type="password" id="password" autocomplete="off" placeholder="Minimum 6 characters">
                    <small></small>
                </div>
                <div class="form-control">
                    <label for="re-password">Confirm Password:</label>
                    <input type="password" id="re-password" autocomplete="off" placeholder="Re-enter Your Password">
                    <small></small>
                </div>
                <input type="submit" class="submitBtn" value="Submit">
                <h1 class="Or">Or</h1>
                <button type="submit" class="googleLogin">Log in with<i class="fa-brands fa-google"></i></button>
            
            </form>
        </div>
    </main>`
};

export default regForm;