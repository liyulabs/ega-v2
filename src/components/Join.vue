<template>
  <section class="join-section">
    <div class="join-card">
      <v-card class="card-content">
        <div class="card-text">
          <h2>Contact</h2>
          <form id="contact" name="contact" accept-charset="utf-8">
            <label
              ><span>Name</span
              ><input name="name" type="text" placeholder="Name"
            /></label>
            <label
              ><span>Email</span
              ><input name="email" type="email" placeholder="Email"
            /></label>
            <label
              ><span>Message</span
              ><textarea name="message" placeholder="Message"></textarea>
            </label>
            <input name="submit" type="submit" value="Send" />
          </form>
        </div>
        <div class="right-text">
          <h2>Ready for a Membership?</h2>

          <p class="card-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            facilis maxime recusandae laborum asperiores, accusamus neque eum
            atque ipsum consequuntur ad, odio dolores dignissimos quasi porro et
            sint deleniti itaque?
          </p>
        </div>
      </v-card>
    </div>
  </section>
</template>
<script setup>
import youth from "../assets/1.jpg";
</script>
<style scoped>
.join-section {
  padding-inline: 5vw;
}
.join-card {
}
.card-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  padding: 2rem;
}
.card-img {
  display: flex;
}
.title {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  color: white;
}
.card-text {
  margin-top: 1rem;
  padding: 2rem;
  background-color: #216d1d;
  font-weight: 100;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.card-paragraph {
  padding-top: 1rem;
  color: black;
}

.card-text h2 {
  margin: 0;
  color: white;
  font-size: 2.5em;
  font-weight: 300;
}

.right-text {
  margin-top: 1rem;
  padding: 2rem;
  font-weight: 100;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
span {
  color: white;
}
#contact-form {
  max-width: 1208px;
  max-width: 75.5rem;
  margin: 0 auto;
}
#contact,
label,
input[name="submit"] {
  position: relative;
}
label > span,
input,
textarea,
button {
  box-sizing: border-box;
}
label {
  display: block;
}
label > span {
  display: none;
}
input,
textarea,
button {
  width: 100%;
  padding: 0.5em;
  border: none;
  font: 300 100%/1.2 Ubuntu, sans-serif;
}
input[type="text"],
input[type="email"],
textarea {
  margin: 0 0 1em;
  border: 1px solid #ccc;
  outline: none;
  background-color: wheat;
}
input.invalid,
textarea.invalid {
  border-color: #d5144d;
}
textarea {
  height: 6em;
}
input[type="submit"],
button {
  background: white;
  color: black;
}
input[type="submit"]:hover,
button:hover {
  background: #13a395;
}
@media screen and (min-width: 30em) {
  #contact-form h2 {
    margin-left: 26.3736%;
    font-size: 2em;
    line-height: 1.5;
  }
  label > span {
    vertical-align: top;
    display: inline-block;
    width: 26.3736%;
    padding: 0.5em;
    border: 1px solid transparent;
    text-align: right;
  }
  input,
  textarea,
  button {
    width: 73.6263%;
    line-height: 1.5;
  }
  textarea {
    height: 10em;
  }
  input[type="submit"],
  button {
    margin-left: 26.3736%;
  }
}
@media screen and (min-width: 48em) {
  #contact-form {
    text-align: justify;
    line-height: 0;
  }
  #contact-form:after {
    content: "";
    display: inline-block;
    width: 100%;
  }
  #contact-form h2 {
    margin-left: 17.2661%;
  }
  #contact-form form,
  #contact-form aside {
    vertical-align: top;
    display: inline-block;
    width: 65.4676%;
    text-align: left;
    line-height: 1.5;
  }
  #contact-form aside {
    width: 30.9353%;
  }
}
</style>
