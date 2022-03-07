<?php
// Global variables
$blogBody = "";
$thisBlogText = "";

if(isset($_GET['blog']))
{
    $blogBody = $_GET['blog'];
}
if(!$blogBody)
{
    // No blog name has been received, redirect home.
    $testUrl = "http://localhost/personal-blog-jh/";
    $liveUrl = "https://doctorhenry.github.io/personal-blog-jh/";
    header("Location: $testUrl");
}
else
{
    // We have a blog name, so include the text of the blog
    include "blogs/".$blogBody.".php";
    $thisBlogText = $blogText;
    // echo $thisBlogText;
}

// HEADER
include "site/header.php";
?>
<!-- Blog Body -->
<main id="main" role="main" class="container">
    <div class="row"><h4>First ECR and Postgraduate conference for CfACS</h4></div>
    <div class="row">
        <div class="col-xl"><?php echo $thisBlogText; ?></div>
    </div>
</main>

<?php
// FOOTER
include "site/footer.php";
?>

