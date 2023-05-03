<script>
		function calculateAttendance() {
			var attended = document.getElementById("attended").value;
			var total = document.getElementById("total").value;

			var percentage = (attended / total) * 100;
      if(percentage<65)
      {
        alert("sem out")
      }

			document.getElementById("result").value = percentage.toFixed(2) + "%";
		}
	</script>