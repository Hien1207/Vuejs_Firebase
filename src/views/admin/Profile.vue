<template>
  <div class="profile container">
    <!-- Verify Notification -->
    <el-row v-if="!user.emailVerified">
      <el-col>
        <p>
          Unverified Email.
          <span
            class="profile__send-email-btn"
            @click="sendEMailVerification"
            >{{ sendEMailVerificationMessage }}</span
          >.
        </p>
      </el-col>
    </el-row>
    <!-- User Avatar -->
    <el-row type="flex">
      <el-col class="profile__user__heading" :span="8">
        <h2 class="profile__user__title">Avatar</h2>
        <p class="profile__user__tagline">Change your avatar here</p>
      </el-col>
      <el-col class="profile__avatar" :span="16">
        <el-avatar
          class="profile__avatar__item"
          :size="avatarSize"
          :src="user.photoURL ? user.photoURL : defaultAvatar"
        ></el-avatar>
        <div class="profile__avatar__upload">
          <p class="label">Upload new avatar</p>
          <div>
            <el-button class="profile__avatar__upload__btn"
              >Choose file...</el-button
            >
            <span>No file chosen.</span>
          </div>
          <p class="profile__user__descript text-muted">
            Maxium file size allowed is 200KB.
          </p>
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <!-- User Infomation -->
    <el-row>
      <el-col class="profile__user__heading" :span="8">
        <h2 class="profile__user__title">Main Setting</h2>
        <p class="profile__user__tagline">Change your information here</p>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-col class="profile__user__item">
            <label class="label" for="user-name">Full name</label>
            <input
              id="user-name"
              type="text"
              v-model="user.displayName"
              placeholder="You haven't fill in this yet."
              class="profile__user__input"
            />
            <p class="profile__user__descript text-muted">This is your name.</p>
          </el-col>
          <el-col class="profile__user__item">
            <label class="label" for="user-email">Email</label>
            <input
              id="user-email"
              type="text"
              v-model="user.email"
              class="profile__user__input"
            />
            <p class="profile__user__descript text-muted">
              This is your email.
            </p>
          </el-col>
          <el-col class="profile__user__item">
            <label class="label" for="user-phone">Phone</label>
            <input
              id="user-phone"
              type="text"
              v-model="user.phoneNumber"
              placeholder="You haven't fill in this yet."
              class="profile__user__input"
            />
            <p class="profile__user__descript text-muted">
              This is your phone number.
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <!-- Update User -->
    <el-row class="profile__update">
      <el-col :span="16" :offset="8">
        <button class="profile__update__btn primary" @click="updateUser">
          Update profile settings
        </button>
        <el-button class="profile__update__btn" @click="pageReload">Cancel</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";

export default {
  name: "Profile",
  data() {
    return {
      sendEMailVerificationMessage: "Send verification email",
      defaultAvatar:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      avatarSize: 70,
      user: this.$store.state.user,
    };
  },
  methods: {
    sendEMailVerification() {
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          this.sendEMailVerificationMessage = "Email Sent";
        });
    },
    pageReload() {
      window.location.reload()
    },
    updateUser() {
      this.$store.dispatch('updateUser', this.user)
       .then(function (response) {
         alert("Update success");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
};
</script>

<style lang="scss" scoped>
.profile {
  margin-top: 16px;
  margin-bottom: 16px;
  &__send-email-btn {
    text-decoration: underline;
    cursor: pointer;
  }
  &__send-email-btn:hover {
    color: var(--blue-hover);
  }
  &__avatar {
    display: flex;
    align-items: center;
    gap: 15px;
    &__upload {
      &__btn {
        font-size: 14px;
        padding: 8px 12px;
        margin-right: 10px;
      }
      &__btn:focus {
        border-color: var(--blue-hover);
      }
    }
    &__input {
      cursor: pointer;
    }
  }
  &__user {
    &__title, &__tagline {
      margin: 0;
      margin-bottom: 10px;
    }
    &__item {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
      padding: 10px 0;
    }
    &__input {
      border: 1px solid #cccccc;
      border-radius: 5px;
      padding: 8px 12px;
      font-family: futura-regular;
    }
    &__input:focus {
      border-color: var(--blue-hover);
    }
    &__descript {
      margin: 0;
      font-size: 14px;
      margin-top: 5px;
    }
  }
  &__update {
    &__btn {
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }
  }
}
.label {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
}
.primary {
  border: 1px solid var(--blue-hover);
  background-color: var(--blue-hover);
  color: white;
  margin-right: 8px;
}
.primary:hover{
    color: black;
}
</style>
