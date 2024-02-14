async function fetchData() {
  try {
    const response1 = await fetch("./src/BackupData/backup1.json");
    const data1 = await response1.json();
  } catch (e) {
    console.log(`error1: ${e}`);
  }

  try {
    const response2 = await fetch("./src/BackupData/backup2.json");
    const data2 = await response2.json();
  } catch (e) {
    console.log(`error2: ${e}`);
  }
}

fetchData();
