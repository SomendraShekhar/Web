

<div class="app-main__outer">
    <div id="refreshData">
    <div class="app-main__inner">
            <div class="app-page-title">
                <div class="page-title-wrapper">
                    <div class="page-title-heading">
                        <div><h1>Dashboard</h1>
                        </div>
                    </div>
                 </div>
            </div>            <div class="row">
                <div class="col-md-6 col-xl-4">
                    <div class="card mb-3 widget-content bg-midnight-bloom">
                        <div class="widget-content-wrapper text-white">
                            <div class="widget-content-left">
                                <div class="widget-heading" style="background-color: lightgreen;padding-left: 1px; ">Total Course</div>
                                <div style="color:transparent;background-color: lightgreen">.</div>
                            </div>
                            <div class="widget-content-right" style="background-color: lightgreen;padding-left: 1px;">
                                <div class="widget-numbers text-white">
                                    <span><?php echo $totalCourse = $selCourse['totCourse']; ?></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="card mb-3 widget-content bg-arielle-smile">
                        <div class="widget-content-wrapper text-white" style="background-color: lightblue">
                            <div class="widget-content-left">
                                <div class="widget-heading" style="background-color: lightblue;padding-left: 1px;">Total Exam</div>
                            <div class="widget-content-right" style="background-color: lightblue;border-color: lightblue;border-width: 10px !important;padding-left: 1px;">
                                <div style="color:transparent;background-color: lightblue">.</div>
                            </div>
                                <div class="widget-numbers text-white">
                                    <span><?php echo $totalCourse = $selExam['totExam']; ?></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

      
        
        </div>
         
    </div>
