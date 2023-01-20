<template>
  <Modal
    :openModal="showModal"
    :title="announcement[indexStatus].title"
    :description="decideDescription(announcement[indexStatus].status)"
    :bgTitle="announcement[indexStatus].color"
    :useModalConfirmation="true"
    negative="Tidak"
    positive="Iya"
    @onNegative="onNegative()"
    @onPositive="(e) => onPositive(e)"
  />
  <div class="flex w-full flex-col gap-4">
    <Alert :show="showAlert" :data="patientWithDanger" />
    <div class="flex flex-col items-end">
      <p>{{ getDate }}</p>
      <h1 class="text-2xl font-bold">{{ getTime }}</h1>
    </div>
    <div class="flex w-full gap-2 lg:gap-0">
      <div
        class="w-full rounded-lg bg-green-300 px-2 py-4 text-center lg:rounded-none lg:rounded-l-lg lg:px-12"
      >
        <span class="text-xl font-bold lg:text-3xl">{{
          getPatientNormal
        }}</span>
        <h1 class="font-medium">Pasien Kondisi Normal</h1>
      </div>
      <div
        class="w-full rounded-lg bg-yellow-300 py-4 px-2 text-center lg:rounded-none lg:px-12"
      >
        <span class="text-xl font-bold lg:text-3xl">{{
          getPatientWarning
        }}</span>
        <h1 class="font-medium">Pasien Kondisi Warning</h1>
      </div>
      <div
        class="w-full rounded-lg bg-red-300 py-4 px-2 text-center lg:rounded-none lg:rounded-r-lg lg:px-12"
      >
        <span class="text-xl font-bold lg:text-3xl">{{
          getPatientDanger
        }}</span>
        <h1 class="font-medium">Pasien Kondisi Danger</h1>
      </div>
    </div>
    <div class="flex flex-col gap-4 lg:grid lg:grid-cols-4">
      <Card
        v-for="(item, index) in dataPatient"
        :key="`${item.pasien}-${index}`"
        :id="`card-patient-${index}`"
        width="30"
        height="30"
        :heart="item.heart"
        :lungs="item.lungs"
        :oxygen="item.oxygen"
        :sistole="item.sistole"
        :diastole="item.diastole"
        :temperature="item.temp"
        :patient="item.patient"
        :type="getHeart(index)"
        :name="item.name"
        :registation="item.registration"
        @click="onClickCard(item.status, item.patient)"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card/Card.vue";
import { getFormatTimer } from "@/app/utils";
import Alert from "@/components/Alert/Alert.vue";
import Modal from "@/components/Modal/Modal.vue";

export default {
  name: "dashboard-page",
  components: { Card, Alert, Modal },
  data() {
    return {
      date: "",
      time: "",
      indexStatus: 0,
      dataOnModal: {},
      showModal: false,
      message: "",
      modalList: [],
      showAlert: false,
      patientNormal: [],
      patientWarnig: [],
      patientDanger: [],
      normalHeartRate: [40, 60],
      dangerHeartRate: [50, 40],

      normalRespirasi: [8, 12],
      dangerRespirasi: [25, 5],

      normalSistole: [30, 90],
      dangerSistole: [150, 50],

      normalDiastole: [20, 60],
      dangerDiastole: [140, 40],

      normalOxymeter: [5, 95],
      dangerOxymeter: [75, 35],

      normalTemperature: [1, 37],
      dangerTemperature: [7, 34],

      countFiveMinutes: 0,
      patientWithDanger: [],
      patientAction: 0,
      patientStatusByIndex: "",
      dataPatient: [
        {
          patient: 1,
          name: "Alvin Rosandi",
          registration: 123919238,
          status: "normal",
          heart: 52,
          lungs: 18,
          sistole: 90,
          diastole: 60,
          temp: 37,
          oxygen: 97,
        },
        {
          patient: 2,
          name: "Biru Swasana Pagi",
          registration: 123919238,
          status: "normal",
          heart: 63,
          lungs: 20,
          sistole: 91,
          diastole: 61,
          temp: 38,
          oxygen: 99,
        },
        {
          patient: 3,
          name: "Daniel Rama Pradipta",
          registration: 123919238,
          status: "normal",
          heart: 63,
          lungs: 34,
          sistole: 92,
          diastole: 62,
          temp: 38,
          oxygen: 99,
        },
        {
          patient: 4,
          name: "Intan Dzakiyyah",
          registration: 123919238,
          status: "normal",
          heart: 72,
          lungs: 36,
          sistole: 92,
          diastole: 63,
          temp: 38,
          oxygen: 95,
        },
        {
          patient: 6,
          name: "Valencia",
          registration: 123919238,
          status: "normal",
          heart: 78,
          lungs: 40,
          sistole: 93,
          diastole: 64,
          temp: 37,
          oxygen: 98,
        },
        {
          patient: 5,
          name: "Capstone",
          registration: 123919238,
          status: "normal",
          heart: 96,
          lungs: 15,
          sistole: 94,
          diastole: 65,
          temp: 38,
          oxygen: 96,
        },
        {
          patient: 7,
          name: "Expo",
          registration: 123919238,
          status: "normal",
          heart: 85,
          lungs: 19,
          sistole: 95,
          diastole: 66,
          temp: 37,
          oxygen: 96,
        },
        {
          patient: 8,
          name: "DTETI 2022",
          registration: 123919238,
          status: "normal",
          heart: 97,
          lungs: 0,
          sistole: 96,
          diastole: 67,
          temp: 38,
          oxygen: 98,
        },
      ],

      announcement: [
        {
          type: "danger",
          title: "Konfirmasi Tindakan Langsung",
          color: "#7B0D0D",
        },
        {
          type: "warning",
          title: "Konfirmasi Tindakan Langsung",
          color: "#958F00",
        },
      ],
    };
  },
  computed: {
    getHeart() {
      return (index) => this.dataPatient[index].status;
    },
    getDate() {
      return this.date;
    },
    getTime() {
      return this.time;
    },
    getPatientNormal() {
      return this.patientNormal.length;
    },
    getPatientWarning() {
      return this.patientWarnig.length;
    },
    getPatientDanger() {
      return this.patientDanger.length;
    },
  },
  created() {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (!auth) {
      this.$router.push("/");
    }

    this.calculatePatient("normal", this.dataPatient);

    setInterval(() => {
      this.date = getFormatTimer()[0];
      this.time = getFormatTimer()[1];
    }, 1000);

    this.dataPatient.map((item, index) => {
      setInterval(() => {
        if (index === 0) this.countFiveMinutes += 1;
        if (this.countFiveMinutes > 5 && item.status !== "warning") {
          item.heart = this.randomValue(
            this.dangerHeartRate[0],
            this.dangerHeartRate[1]
          );
          if (item.heart < 90) {
            item.status = "danger";
            if (!Boolean(this.patientDanger.indexOf(item.patient) + 1)) {
              this.patientDanger.push(item.patient);
              this.patientNormal = this.patientNormal.filter(
                (data) => data.patient !== item.patient
              );
            }

            if (!Boolean(this.patientWithDanger.indexOf(item.patient) + 1))
              this.patientWithDanger.push(item.patient);
            this.showAlert = true;
          }
        } else {
          item.heart = this.randomValue(
            this.normalHeartRate[0],
            this.normalHeartRate[1]
          );
        }
      }, 1000 * (index + 1));
    });

    this.dataPatient.map((item, index) => {
      setInterval(() => {
        item.lungs = this.randomValue(
          this.normalRespirasi[0],
          this.normalRespirasi[1]
        );
      }, 1200 * (index + 1));
    });

    this.dataPatient.map((item, index) => {
      setInterval(() => {
        item.sistole = this.randomValue(
          this.normalSistole[0],
          this.normalSistole[1]
        );
      }, 1300 * (index + 1));
    });

    this.dataPatient.map((item, index) => {
      setInterval(() => {
        item.diastole = this.randomValue(
          this.normalDiastole[0],
          this.normalDiastole[1]
        );
      }, 1300 * (index + 1));
    });

    this.dataPatient.map((item, index) => {
      setInterval(() => {
        item.temp = this.randomValue(
          this.normalTemperature[0],
          this.normalTemperature[1]
        );
      }, 1320 * (index + 1));
    });

    this.dataPatient.map((item, index) => {
      setInterval(() => {
        item.oxygen = this.randomValue(
          this.normalOxymeter[0],
          this.normalOxymeter[1]
        );
      }, 1150 * (index + 1));
    });
  },
  methods: {
    statusPatient() {
      this.dataOnModal = this.announcement.find(
        (item) => item.type === this.status
      );
    },
    calculatePatient(type, data) {
      const patientType = type.replace(type[0], type[0].toUpperCase());
      const result = (this[`totalPatient${patientType}`] = data.filter(
        (item) => item.status === type
      ));
      this.patientNormal = result;
    },
    onClickCard(value, index) {
      this.patientAction = index;
      if (value === "danger") {
        this.indexStatus = 0;
      } else if (value === "warning") {
        this.indexStatus = 1;
      } else {
        this.indexStatus = 3;
      }

      this.patientStatusByIndex = value;
      this.showModal = true;
    },
    onNegative() {
      this.showModal = false;
    },
    onPositive(e) {
      this.showModal = false;
      this.dataPatient
        .filter((item) => item.patient === this.patientAction)
        .map((item) => {
          if (
            item.patient === this.patientAction &&
            item.status === "warning" &&
            this.patientStatusByIndex === "warning"
          ) {
            item.status = "normal";
            this.countFiveMinutes = -9999;
          } else if (
            item.patient === this.patientAction &&
            item.status !== "warning" &&
            this.patientStatusByIndex !== "warning"
          ) {
            item.status = "warning";
            this.patientWarnig.push(item);
            this.patientDanger = this.patientDanger.filter(
              (data) => data !== item.patient
            );
          }
        });
    },
    randomValue(range, start) {
      return Math.floor(Math.random() * range + start);
    },
    decideDescription(status) {
      return status === "warning"
        ? `Apakah Pasien ${this.patientAction} akan segera dilakukan tindakan langsung?`
        : `Apakah Pasien ${this.patientAction} akan segera dilakukan tindakan langsung?`;
    },
  },
  destroyed() {
    clearInterval();
  },
};
</script>

<style lang="scss" scoped></style>
