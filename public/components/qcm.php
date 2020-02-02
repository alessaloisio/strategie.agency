<div id="qcm">
  <div class="container">
    <form id="qcmForm" name="qcmForm" action="/validate.php" method="post">
      <?php include("./components/qcm-step1.php"); ?>
      <?php include("./components/qcm-step2.php"); ?>
    </form>
    <?php include("./components/qcm-final.php"); ?>
  </div>
</div>