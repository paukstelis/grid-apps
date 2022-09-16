// English language map. Other localization maps will
// defer to English map for any missing key/value pairs
self.kiri.lang['en'] =
self.kiri.lang['en-us'] = {
    // common keys and menus
    animate:        "animate",      // CAM animate button
    arrange:        "arrange",      // layout workspace objects
    axis:           "axis",         // left object scale pop menu
    clear:          "clear",        // clear workspace (remove all objects)
    copy:           "copy",
    delete:         "delete",
    detail:         "detail",
    done:           "done",
    enable:         "enable",
    export:         "export",
    files:          "files",
    help:           "help",
    ghost:          "ghost",        // left render pop menu (wireframe)
    hide:           "hide",         // left render pop menu (invisible)
    home:           "home",
    import:         "import",
    language:       "language",
    machine:        "machine",      // device or machine
    mesh:           "mesh",         // mesh editing
    metric:         "metric",
    name:           "name",
    prefs:          "prefs",        // left menu "preferences"
    preview:        "preview",
    recent:         "recent",
    render:         "render",       // left render pop menu
    reset:          "reset",
    rotate:         "rotate",       // left rotate pop menu
    save:           "save",
    scale:          "scale",        // left object scale pop menu
    select:         "select",
    setup:          "setup",
    settings:       "settings",
    size:           "size",
    slice:          "slice",
    solid:          "solid",        // view type pop menu
    start:          "start",
    tool:           "tool",
    tools:          "tools",        // CAM tool menu button
    top:            "top",
    type:           "type",         // CAM tool type
    version:        "version",
    view:           "view",         // left view pop menu
    wire:           "wire",         // left render pop menu
    volume:         "volume",       // device build area

    acct_xpo:       ["make a backup of your device","and device profiles with the","option to include workspace","objects and positions"],

    // RIGHT-CLICK CONTEXT MENU
    rc_clws:        "clear workspace",
    rc_xpws:        "export workspace",
    rc_lafl:        "lay flat",
    rc_mirr:        "mirror",
    rc_dupl:        "duplicate",
    rc_focs:        "set focus",
    rc_heal:        "heal meshes",
    rc_swap:        "replace vertices",
    rc_xobj:        "export OBJ",
    rc_xstl:        "export STL",
    sb_info:        ["print speed","in mm/s"],

    // DEVICE MENU and related dialogs
    dm_sldt:        "select a device type",
    dm_stdd:        "standard devices",
    dm_mydd:        "my devices",
    dm_seld:        "selected device",
    dm_rcnt:        "recent files",
    dm_savs:        "saved settings",
    dm_appp:        "Application Preferences",

    // CAM Tool Dialog
    td_tyem:        "end",          // end mill
    td_tybm:        "ball",         // ball mill
    td_tytm:        "taper",        // taper mill
    td_tonm:        "tool #",
    td_shft:        "shaft",        // endmill shaft specs
    td_flut:        "flute",        // endmill flute specs
    td_tapr:        "taper",        // endmill taper specs

    // DEVICE dialog groups
    dv_gr_dev:      "device",
    dv_gr_ext:      "extruder",
    dv_gr_pal:      "palette",
    dv_gr_out:      "output",
    dv_gr_gco:      "gcode macros",

    // DEVICE dialog (_s = label, _l = hover help)
    dv_name_s:      "name",
    dv_name_l:      "device name",
    dv_fila_s:      "filament",
    dv_fila_l:      "diameter in millimeters",
    dv_nozl_s:      "nozzle",
    dv_nozl_l:      "diameter in millimeters",
    dv_bedw_s:      "width",
    dv_bedw_l:      "workspace units",
    dv_bedd_s:      "depth",
    dv_bedd_l:      "workspace units",
    dv_bedh_s:      "height",
    dv_bedh_l:      ["max build height","in workspace units"],
    dv_rezx_s:      "resolution X",
    dv_rezx_l:      ["x resolution"],
    dv_rezy_s:      "resolution Y",
    dv_rezy_l:      ["y resolution"],
    dv_zmax_s:      "Z axis speed limit",
    dv_zmax_l:      ["maximum Z axis speed","in millimeters / second","0 to disable"],
    dv_time_s:      "output time factor",
    dv_time_l:      ["modifier to print time estimates","in the gcode export dialog.","raise or lower value based on your","predicted vs observed print times"],
    dv_spmx_s:      "max spindle",
    dv_spmx_l:      ["max spindle rpm speed","0 to disable"],
    dv_xtab_s:      "absolute positioning",
    dv_xtab_l:      "extrusion moves absolute",
    dv_orgc_s:      "origin center",
    dv_orgc_l:      "bed origin center",
    // dv_orgt_s:      "origin top",
    // dv_orgt_l:      "part z origin top",
    dv_bedc_s:      "circular bed",
    dv_bedc_l:      "device bed is circular",
    dv_belt_s:      "belt bed",
    dv_belt_l:      "continuous printing bed",
    dv_fsrc_s:      "filament source",
    dv_fsrc_l:      ["how filament is fed\ninto the extruder"],
    dv_retr_s:      "firmware retract",
    dv_retr_l:      ["device fimware supports G10/G11"],
    dv_fanp_s:      "cooling",
    dv_fanp_l:      "set cooling fan power",
    dv_feat_s:      "feature",
    dv_feat_l:      "inject code for specified features",
    dv_prog_s:      "progress",
    dv_prog_l:      "output on each % progress",
    dv_layr_s:      "layer",
    dv_layr_l:      ["output at each","layer change"],
    dv_tksp_s:      "token spacer",
    dv_tksp_l:      ["add a space between","gcode axis parameters","G0X0Y0X0","vs","G0 X0 Y0 Z0"],
    dv_strc_s:      "strip comments",
    dv_strc_l:      ["strip gcode comments","comments begin with ;"],
    dv_fext_s:      "file extension",
    dv_fext_l:      "file name extension",

    dv_dwll_s:      "dwell",
    dv_dwll_l:      "gcode dwell script",
    dv_tool_s:      "tool change",
    dv_tool_l:      "tool change script",
    dv_sspd_s:      "spindle speed",
    dv_sspd_l:      "set spindle speed",
    dv_paus_s:      "pause",
    dv_paus_l:      "gcode pause script",
    dv_head_s:      "header",
    dv_head_l:      "gcode header script",
    dv_foot_s:      "footer",
    dv_foot_l:      "gcode footer script",
    dv_pext_s:      "exterior",
    dv_pext_l:      ["gcode script run before","printing exterior lines"],
    dv_pint_s:      "interior",
    dv_pint_l:      ["gcode script run before","printing interior lines"],
    dv_lzon_s:      "laser on",
    dv_lzon_l:      "gcode laser on script",
    dv_lzof_s:      "laser off",
    dv_lzof_l:      "gcode laser off script",
    dv_exts_s:      "select",
    dv_exts_l:      "gcode run to enable this extruder",
    dv_dext_s:      "deselect",
    dv_dext_l:      "gcode run before enabling another extruder",
    dv_extd_s:      "deselect",
    dv_extd_l:      "gcode to deselect this extruder",
    dv_exox_s:      "offset x",
    dv_exox_l:      "nozzle offset x",
    dv_exoy_s:      "offset y",
    dv_exoy_l:      "nozzle offset y",

    dv_paid_s:      "printer id",
    dv_paid_l:      ["unique printer identifier","may be made up"],
    dv_paps_s:      "ping spacing",
    dv_paps_l:      ["minimum filament consumption","between pings in millimeters","recommended 500 - 1000","0 = disable pings"],
    dv_pafe_s:      "feed length",
    dv_pafe_l:      ["feeder tube length in millimeters","short=570, medium=800, long=1100"],
    dv_papl_s:      "push length",
    dv_papl_l:      ["distance between extruder gear","and nozzle tip in millimeters"],
    dv_paof_s:      "offset length",
    dv_paof_l:      ["length to add or remove from","the first segment in millimeters","usually 0"],
    dv_pahe_s:      "heating time",
    dv_pahe_l:      ["offset from default"],
    dv_paco_s:      "cooling time",
    dv_paco_l:      ["offset from default"],
    dv_pacm_s:      "compression time",
    dv_pacm_l:      ["offset from default"],

    // MODE
    mo_menu:        "mode",
    mo_fdmp:        "FDM Print",
    mo_slap:        "SLA Print",
    mo_lazr:        "Laser Cut",
    mo_cncm:        "CNC Mill",

    // SETUP
    su_menu:        "setup",
    su_devi:        "Devices",
    su_tool:        "Tools",
    su_locl:        "Local",
    su_xprt:        "Export",
    su_help:        "Help",

    // LOAD
    fe_menu:        "file",
    fn_recn:        "Recent",
    fn_impo:        "Import",

    // FUNCTION
    fn_menu:        "action",
    fn_arra:        "Arrange",
    fn_slic:        "Slice",
    fn_prev:        "Preview",
    fn_expo:        "Export",

    // VIEW
    vu_menu:        "view",
    vu_home:        "Home",
    vu_rset:        "Reset",
    vu_sptp:        "Top",
    vu_spfr:        "Front",
    vu_splt:        "Left",
    vu_sprt:        "Right",

    // WORKSPACE
    ws_menu:        "view",
    ws_save:        "Save",
    ws_cler:        "Clear",

    // OPTIONS
    op_menu:        "interface",
    op_disp:        "display",
    op_xprt_s:      "expert",
    op_xprt_l:      "show more settings options",
    op_decl_s:      "show decals",
    op_decl_l:      "show device decals and logos",
    op_shny_s:      "detail render",
    op_shny_l:      "choose a slice render method that is slower and uses specular highlighting. this makes it easier to see detail in some models at the expense of render speed",
    op_dang_s:      "experimental",
    op_dang_l:      "show experimental parameters",
    op_devl_s:      "developer",
    op_devl_l:      ["show developer options","enable developer debugging"],
    op_hopo_s:      "hover pop",
    op_hopo_l:      ["enable menu hover","to activate"],
    op_dark_s:      "dark mode",
    op_dark_l:      "dark mode interface",
    op_comp_s:      "compact ui",
    op_comp_l:      ["compact user interface","better for small screens","and tablets"],
    op_shor_s:      "show origin",
    op_shor_l:      "show device or process origin",
    op_shru_s:      "show rulers",
    op_shru_l:      ["show axes rulers","on major gridlines"],
    op_sped_s:      "show speeds",
    op_sped_l:      ["show speed to color bar","in preview mode"],
    op_auto_s:      "auto layout",
    op_auto_l:      ["automatically layout platform","when new items added"],
    op_free_s:      "free layout",
    op_free_l:      ["permit dragable layout","no effect in laser mode"],
    op_spcr_s:      "spacing",
    op_spcr_l:      ["spacing between objects","during auto layout","in workspace units","in belt mode, use 0","to auto-space by height"],
    op_spcx_s:      "random X",
    op_spcx_l:      ["in belt mode, randomly","layout the part on X","to even belt wear"],
    op_orth_s:      "orthographic",
    op_orth_l:      ["orthographic display","requires page refresh"],
    op_anta_s:      "anti-alias",
    op_anta_l:      ["smooth display. better but slower","requires a page refresh or reload"],
    op_invr_s:      "invert zoom",
    op_invr_l:      ["invert mouse wheel","scroll zoom"],
    op_save_s:      "auto save",
    op_save_l:      ["preserve objects in workspace","between application reloads"],
    op_line_s:      "line type",
    op_line_l:      ["line style for path rendering","impacts 3d performance","path: 3d best","flat: 2d good","line = 1d fast"],
    op_unit_s:      "units",
    op_unit_l:      ["workspace units affects","speeds and distances"],
    op_anim_s:      "animate",
    op_anim_l:      ["animation mesh density","higher is more dense","takes more memory","and is slower"],
    op_exgl_l:      ["show Grid:Local devices in export dialog","includes Grid:Bots and OctoPrint plugins"],
    op_exgh_l:      ["legacy Grid:Host local network support"],
    op_exop_l:      ["legacy OctoPrint local network support","Grid:Space OctoPrint plugin recommended"],

    lo_menu:        "layout",

    pt_menu:        "slicer",
    pt_deci_s:      "decimate",
    pt_deci_l:      ["enable or disable point decimation","during port import. for faster slicing","and lower memory usage"],
    pt_qual_s:      "detail",
    pt_qual_l:      ["level of detail to retain","during slicing operations","lower is faster"],
    pt_heal_s:      "heal mesh",
    pt_heal_l:      ["attempt to heal","non-manifold meshes","adds to slicing time"],
    pt_thrd_s:      "threaded",
    pt_thrd_l:      ["use parallel processing","when browser permits"],
    pt_assy_s:      "assembly",
    pt_assy_l:      ["use web assembly","when browser permits"],

    xp_menu:        "exports",

    // SETTINGS
    se_menu:        "profile",
    se_load:        "load",
    se_save:        "save",

    // FDM SLICING
    sl_menu:        "layers",
    sl_lahi_s:      "height",
    sl_lahi_l:      ["height of each slice","layer in millimeters"],
    ad_minl_s:      "height min",
    ad_minl_l:      ["adaptive min layer height","in millimeters","must be non-zero"],
    sl_ltop_s:      "top layers",
    sl_ltop_l:      ["number of solid layers","to enforce at the","top of the print"],
    sl_lsld_s:      "solid layers",
    sl_lsld_l:      ["solid fill areas computed","from bridges and flat areas","detected betwen sliced layers"],
    sl_lbot_s:      "base layers",
    sl_lbot_l:      ["number of solid layers","to enforce at the","bottom of the print"],
    ad_adap_s:      "adaptive",
    ad_adap_l:      ["use adaptive layer heights","with 'layer height' as max","and 'layer min' as the min"],

    // FDM SHELLS
    sl_shel_s:      "shell count",
    sl_shel_l:      ["number of perimeter","walls to generate"],
    sl_line_s:      "line width",
    sl_line_l:      ["extrusion width in millimeters","0 = nozzle diameter"],
    sl_ordr_s:      "shell order",
    sl_ordr_l:      ["output shell order","inside to outside","or outside to inside","affects surface quality"],
    sl_strt_s:      "layer start",
    sl_strt_l:      ["layer starting point","last = last layer end","center = part center","origin = device origin"],
    ad_thin_s:      "thin wall",
    ad_thin_l:      ["detect and fill gaps","between shell walls"],

    // FDM FILL
    fi_menu:        "infill",
    fi_type:        "fill type",
    fi_pcnt_s:      "fill fraction",
    fi_pcnt_l:      ["fill density values","0.0 - 1.0"],
    fi_rept_s:      "fill repeat",
    fi_rept_l:      ["number of times to repeat","unchanged fill layers"],
    fi_angl_s:      "solid angle",
    fi_angl_l:      ["starting angle in degrees","90 degrees added to ","each following layer","applies only to solid layers"],
    fi_grow_s:      "solid expand",
    fi_grow_l:      ["expand projected solids","can help with solid areas","over sparse infill areas","units in millimeters"],
    fi_over_s:      "shell overlap",
    fi_over_l:      ["overlap with shell and other fill","as fraction of nozzle diameter","0.0 - 2.0"],
    // fi_rate_s:      "print speed",
    fi_rate_l:      ["extrusion speed for infill","set to 0 to use default","output print speeds"],

    // FDM FIRST LAYER
    fl_menu:        "base",
    fl_lahi_s:      "layer height",
    fl_lahi_l:      ["height of each slice","in millimeters","should be >= slice height"],
    fl_rate_s:      "shell speed",
    fl_rate_l:      ["shell printing max speed","in millimeters / second"],
    fl_frat_s:      "fill speed",
    fl_frat_l:      ["fill printing max speed","in millimeters / second"],
    fl_mult_s:      "flow factor",
    fl_mult_l:      ["extrusion multiplier","0.0 - 2.0"],
    fl_sfac_s:      "width factor",
    fl_sfac_l:      ["multiplier on nozzle size","changes line spacing"],
    fl_skrt_s:      "skirt count",
    fl_skrt_l:      ["number of first-layer offset","brims to generate"],
    fl_skro_s:      "skirt offset",
    fl_skro_l:      ["skirt offset from part","in millimeters","when rafts are used","this is the raft offset"],
    fl_nozl_s:      "nozzle temp",
    fl_nozl_l:      ["degrees in celsius","output setting used","when this is zero"],
    fl_bedd_s:      "bed temp",
    fl_bedd_l:      ["degrees in celsius","output setting used","when this is zero"],
    fr_spac_s:      "raft gap",
    fr_spac_l:      ["additional layer spacing","between 1st layer and raft","in millimeters"],
    fr_nabl_s:      "raft enable",
    fr_nabl_l:      ["create a raft under the","model for better adhesion","uses skirt offset and","disables skirt output"],
    fr_draf_s:      "draft shield",
    fr_draf_l:      ["extend skirt to height of part","which acts as a shield against","drafts and traps hot air"],

    // FDM BELT ONLY
    fl_zoff_s:      "belt offset",
    fl_zoff_l:      ["height offset from belt","of lowest extrusion","in millimeters"],
    fl_flat_s:      "flatten",
    fl_flat_l:      ["flatten to the belt any point","height less than this value","in millimeters"],
    fl_brim_s:      "brim sides",
    fl_brim_l:      ["add brim to part perimeter","size is width in millimeters","0 to disable"],
    fl_brin_s:      "brim interior",
    fl_brin_l:      ["add brim to part interior","when interior voids exist","size is width in millimeters","0 to disable"],
    fl_brmn_s:      "brim trigger",
    fl_brmn_l:      ["add brims only when segment","facing belt is shorter than this","value in millimeters","0 = Infinity"],
    fl_brco_s:      "brim comb",
    fl_brco_l:      ["add brim gaps","every n lines","0 to disable"],
    fl_brgp_s:      "brim gap",
    fl_brgp_l:      ["spacing between brim and part","in millimeters"],
    fl_bled_s:      "part anchor",
    fl_bled_l:      ["belt part anchor","at start of print","in millimeters"],
    fl_blmp_s:      "anchor bump",
    fl_blmp_l:      ["add a bump to the start of","an anchor to help it peel","off at the end of the belt","in millimeters"],

    // FDM SUPPORT
    sp_menu:        "support",
    sp_detect:      "detect",
    sp_dens_s:      "density",
    sp_dens_l:      ["fraction 0.0 - 1.0","recommended 0.15","0 to disable"],
    sp_size_s:      "pillar size",
    sp_size_l:      ["pillar width in millimeters","smaller values exponentially","increase detection times"],
    sp_offs_s:      "part offset",
    sp_offs_l:      ["offset from part","in millimeters"],
    sp_gaps_s:      "gap layers",
    sp_gaps_l:      ["number of layers","offset from part"],
    sp_span_s:      "max span",
    sp_span_l:      ["unsupported span that causes","a new support to be generated","in millimeters"],
    sp_angl_s:      "max angle",
    sp_angl_l:      ["max overhang angle before","supporting pillar is generated","normal values 45-60","belt values 0-10"],
    sp_area_s:      "min area",
    sp_area_l:      ["minimum area for","a support column","in millimeters","smaller values will","slow detection"],
    sp_xpnd_s:      "expand",
    sp_xpnd_l:      ["expand support area","beyond part boundary","in millimeters"],
    sp_nozl_s:      "extruder",
    sp_nozl_l:      ["in multi-extruder systems","the extruder to use for","support material"],
    sp_outl_s:      "outline",
    sp_outl_l:      ["enclose support pattern","inside a perimeter shell"],
    sp_auto_s:      "automatic",
    sp_auto_l:      ["enable generated supports","using at-slice-time geometry","supports will only appear","after slicing completes"],

    // LASER SLICING
    ls_offs_s:      "offset",
    ls_offs_l:      ["adjust for beam width","also known as kerf","in millimeters"],
    ls_lahi_s:      "height",
    ls_lahi_l:      ["layer height","in millimeters","0 = auto/detect"],
    ls_lahm_s:      "min",
    ls_lahm_l:      ["layer height minimum","will merge auto slices","under this thickness","in millimeters"],
    ls_sngl_s:      "single",
    ls_sngl_l:      ["perform only one slice","at specified layer height"],

    // CNC COMMON terms
    cc_tool:        "tool",
    cc_offs_s:      "offset",
    cc_offs_l:      ["offset tool center","from chosen path"],
    cc_spnd_s:      "spindle rpm",
    cc_spnd_l:      ["spindle speed in","revolutions / minute"],
    cc_sovr_s:      "step over",
    cc_sovr_l:      ["as a fraction of","tool diameter"],
    cc_sdwn_s:      "step down",
    cc_sdwn_l:      ["step down depth","for each pass","in workspace units","0 to disable"],
    cc_feed_s:      "feed rate",
    cc_feed_l:      ["max cutting speed in","workspace units / minute"],
    cc_plng_s:      "plunge rate",
    cc_plng_l:      ["max z axis speed in","workspace units / minute"],
    cc_sngl_s:      "select lines only",
    cc_sngl_l:      ["select only single edges","instead of connected polylines"],
    cc_sele_s:      "select",
    cc_sele_l:      ["select lines for follow","select loops for clear","select surface for pocket"],

    // CNC COMMON
    cc_menu:        "limits",
    cc_flip:        "flip",
    cc_rapd_s:      "xy feed",
    cc_rapd_l:      ["max xy moves feedrate","in workspace units / minute"],
    cc_rzpd_s:      "z feed",
    cc_rzpd_l:      ["max z moves feedrate","in workspace units / minute"],

    cc_loff_s:      "offset",
    cc_loff_l:      ["distance from stock face","for leveling pass","in workspace units"],

    // CNC ROUGHING
    cr_menu:        "rough",
    cr_lsto_s:      "leave stock",
    cr_lsto_l:      ["horizontal offset from vertical faces","stock to leave for finishing pass","in workspace units"],
    cr_ease_s:      "ease down",
    cr_ease_l:      ["plunge cuts will","spiral down or ease","along a linear path"],
    cr_clrt_s:      "clear top",
    cr_clrt_l:      ["run a clearing pass over","the bounding area of the part","at z = 0"],
    cr_clrp_s:      "clear voids",
    cr_clrp_l:      ["mill out through pockets","instead of just the outline"],
    cr_clrf_s:      "clear faces",
    cr_clrf_l:      ["interpolate step down to","clear any detected flat areas"],
    cr_olin_s:      "inside only",
    cr_olin_l:      ["limit cutting to","inside part boundaries"],

    // CNC OUTLINE
    co_menu:        "outline",
    co_dogb_s:      "dogbones",
    co_dogb_l:      ["insert dogbone cuts","into inside corners"],
    co_clrt_s:      "clear top",
    co_clrt_l:      ["cut starting at the top of stock","when stock is enabled"],
    co_wide_s:      "wide cutout",
    co_wide_l:      ["widen outside cutout paths","for deep cuts in hard material"],
    co_olin_s:      "inside only",
    co_olin_l:      ["limit cutting to","inside part boundaries"],
    co_olot_s:      "outside only",
    co_olot_l:      ["limit cutting to","exterior part boundaries","which can be thought of","as the shadow outline"],
    co_omit_s:      "omit through",
    co_omit_l:      "eliminate thru holes",
    co_olen_s:      "enable",
    co_olen_l:      "enabled outline cutting",

    // CNC CONTOUR
    cn_menu:        "contour",
    cf_angl_s:      "max angle",
    cf_angl_l:      ["angles greater than this","are considered vertical"],
    cf_curv_s:      "curves only",
    cf_curv_l:      ["limit linear cleanup","to curved surfaces"],
    cf_olin_s:      "inside only",
    cf_olin_l:      ["limit cutting to","inside part boundaries"],
    cf_linx_s:      "enable y pass",
    cf_linx_l:      "linear y-axis finishing",
    cf_liny_s:      "enable x pass",
    cf_liny_l:      "linear x-axis finishing",

    // CNC TRACE
    cu_menu:        "trace",
    cu_type_s:      "type",
    cu_type_l:      ["clear = clear a closed-line pocket","follow = tool tip follows line","with offset option when closed"],

    // CNC POCKET
    cp_xpnd_s:      "expand",
    cp_xpnd_l:      ["grow selected area to","encompass corners"],

    // CNC DRILLING
    cd_menu:        "drill",
    cd_axis:        "axis",
    cd_points:      "points",
    // cd_plpr_s:      "plunge per",
    // cd_plpr_l:      ["max plunge between","dwell periods","in workspace units","0 to disable"],
    cd_dwll_s:      "dwell time",
    cd_dwll_l:      ["dwell time","between plunges in","in milliseconds"],
    cd_lift_s:      "drill lift",
    cd_lift_l:      ["lift between plunges","after dwell period","in workspace units","0 to disable"],
    cd_regi_s:      "register",
    cd_regi_l:      ["drill registration holes","for double-sided parts","independent of enable","drilling but uses same","tool and settings"],
    cd_mark_s:      "marking",
    cd_mark_l:      ["only mark holes, do not drill out","the step down setting is used","to determine how deep to mark"],

    // CNC CUTOUT TABS
    ct_menu:        "tabs",
    ct_angl_s:      "angle",
    ct_angl_l:      ["starting angle for tab spacing","in degrees (0-360)"],
    ct_numb_s:      "count",
    ct_numb_l:      ["number of tabs to use","will be spaced evenly","around the part"],
    ct_wdth_s:      "width",
    ct_wdth_l:      "width in workspace units",
    ct_hght_s:      "height",
    ct_hght_l:      "height in workspace units",
    ct_dpth_s:      "depth",
    ct_dpth_l:      ["distance in workspace units","that the tab projects from","the part surface"],
    ct_midl_s:      "midline",
    ct_midl_l:      ["use midline of tab","instead of z bottom","for double-sided work"],
    ct_nabl_s:      "auto",
    ct_nabl_l:      ["auto generate radial tabs","projected from part center","using count and angle offset"],

    // OUTPUT
    ou_menu:        "output",

    // LASER KNIFE
    dk_menu:        "knife",
    dk_dpth_s:      "cut depth",
    dk_dpth_l:      ["final cut depth","in millimeters"],
    dk_pass_s:      "cut passes",
    dk_pass_l:      ["number of passes","down to cut depth"],
    dk_offs_s:      "tip offset",
    dk_offs_l:      ["distance from blade tip","to center of tool","in millimeters"],

    // OUTPUT LASER
    ou_spac_s:      "spacing",
    ou_spac_l:      ["distance between layer output","in millimeters"],
    ou_scal_s:      "scaling",
    ou_scal_l:      "multiplier (0.1 to 100)",
    ou_powr_s:      "power",
    ou_powr_l:      ["0 - 100","represents %"],
    ou_sped_s:      "speed",
    ou_sped_l:      "millimeters / second",
    ou_mrgd_s:      "merged",
    ou_mrgd_l:      ["merge all layers using","color coding to denote","stacking depth"],
    ou_grpd_s:      "grouped",
    ou_grpd_l:      ["retain each layer as","a unified grouping","instead of separated","polygons"],
    ou_layr_s:      "layer order",
    ou_layr_l:      ["output layer order","from top right to","bottom left"],
    ou_layo_s:      "layer color",
    ou_layo_l:      ["output layer colors","for each z index","overridden by merged"],
    ou_lays_s:      "layer stacking",
    ou_lays_l:      ["mark layers for stacking","with a unique color"],
    ou_drkn_s:      "drag knife",
    ou_drkn_l:      ["enable drag knife","output in gcode","cut radii are added","to corners with","cut down passes"],

    // OUTPUT FDM
    ou_nozl_s:      "nozzle temp",
    ou_nozl_l:      "degrees in celsius",
    ou_bedd_s:      "bed temp",
    ou_bedd_l:      "degrees in celsius",
    ou_feed_s:      "print speed",
    ou_feed_l:      ["max printing speed","set to 0 to use default","millimeters / second"],
    ou_fini_s:      "finish speed",
    ou_fini_l:      ["outermost shell speed","bridge/flat solid layers","set to 0 to use default","millimeters / second"],
    ou_move_s:      "move speed",
    ou_move_l:      ["non-print move speed","millimeters / second","0 = enable G0 moves"],
    ou_shml_s:      "shell factor",
    ou_flml_s:      "solid factor",
    ou_spml_s:      "infill factor",
    ou_exml_l:      ["extrusion multiplier","0.0 - 2.0"],
    ou_fans_s:      "fan speed",
    ou_fans_l:      "0 - 255",

    // OUTPUT CAM
    ou_toll_s:      "tolerance",
    ou_toll_l:      ["surface precision","in workspace units","lower is slower and","uses more memory","0 = automatic based","on animate preference"],
    ou_flat_s:      "flatness",
    ou_flat_l:      ["delta z below which two adjacent","points are considered co-linear"],
    ou_zanc_s:      "z anchor",
    ou_zanc_l:      ["controls the position of the part","when stock Z exceeds part Z"],
    ou_ztof_s:      "z offset",
    ou_ztof_l:      ["offset z anchor","in workspace units","has no effect when","anchor is middle"],
    ou_zbot_s:      "z bottom",
    ou_zbot_l:      ["offset from part bottom","to limit cutting depth","in workspace units"],
    ou_zclr_s:      "z clearance",
    ou_zclr_l:      ["safe travel offset","from top of part","in workspace units"],
    ou_ztru_s:      "z thru",
    ou_ztru_l:      ["extend cutout pass down","in workspace units"],
    ou_conv_s:      "conventional",
    ou_conv_l:      ["milling direction","uncheck for 'climb'"],
    ou_depf_s:      "depth first",
    ou_depf_l:      ["optimize pocket cuts","with depth priority"],

    // CAM STOCK
    cs_menu:        "stock",
    cs_wdth_s:      "width",
    cs_wdth_l:      ["width (x) in workspace units","0 defaults to part size"],
    cs_dpth_s:      "depth",
    cs_dpth_l:      ["depth (y) in workspace units","0 defaults to part size"],
    cs_hght_s:      "height",
    cs_hght_l:      ["height (z) in workspace units","0 defaults to part size"],
    cs_offs_s:      "offset",
    cs_offs_l:      ["use width, depth, height","as offsets from max","part size on platform"],
    cs_clip_s:      "clip to",
    cs_clip_l:      ["rough and outline","clip cutting paths","to defined stock"],
    cs_offe_s:      "enable",
    cs_offe_l:      "enable milling stock",

    // ORIGIN (CAM & LASER)
    or_bnds_s:      "origin bounds",
    or_bnds_l:      ["origin is relative to","boundary of all objects"],
    or_cntr_s:      "origin center",
    or_cntr_l:      "origin is referenced from the center",
    or_topp_s:      "origin top",
    or_topp_l:      "origin is references from the top of objects",

    // FDM ADVANCED
    ad_menu:        "expert",
    ad_rdst_s:      "retract dist",
    ad_rdst_l:      ["amount to retract filament","for long moves. in millimeters"],
    ad_rrat_s:      "retract rate",
    ad_rrat_l:      ["speed of filament","retraction in mm/s"],
    ad_rdwl_s:      "engage dwell",
    ad_wpln_s:      "retract wipe",
    ad_wpln_l:      ["non-printing move","after retraction","in millimeters"],
    ad_rdwl_l:      ["time between re-engaging","filament and movement","in milliseconds"],
    ad_scst_s:      "shell coast",
    ad_scst_l:      ["non-printing end","of perimeter shells","in millimeters"],
    ad_msol_s:      "min solid",
    ad_msol_l:      ["minimum area (mm^2)","required to keep solid","must be > 0.1"],
    ad_mins_s:      "min speed",
    ad_mins_l:      ["minimum speed","for short segments"],
    ad_spol_s:      "short path",
    ad_spol_l:      ["polygons shorter than this","will have their print speed","scaled down to min speed","in millimeters"],
    ad_arct_s:      "arc tolerance",
    ad_arct_l:      ["convert faceted lines to arcs","center point drift tolerance","when matching arc points","consider values around 0.15","in millimeters","0 to disable"],
    ad_zhop_s:      "z hop dist",
    ad_zhop_l:      ["amount to raise z","on retraction moves","in millimeters","0 to disable"],
    ad_abkl_s:      "anti-backlash",
    ad_abkl_l:      ["for better flat surface finish","use micro-movements to cancel","backlash in solid layer output","in millimeters","0 to disable","if your firmware has M425","put that in the gcode header","and leave this as 0"],
    ad_lbir_s:      "belt first",
    ad_lbir_l:      ["always print shells touching the","belt before any other shells"],
    ad_altr_s:      "alternating",
    ad_altr_l:      ["alternate shell winding order","clockwise / counter-clockwise","may reduce warping in thin areas","and help with belt edge adhesion"],
    ad_lret_s:      "layer retract",
    ad_lret_l:      ["force filament retraction","between layers"],
    ad_agap_s:      "avoid gaps",
    ad_agap_l:      ["route around gaps rather","than perform a retract","when possible"],
    ad_play_s:      "polish layers",
    ad_play_l:      ["polish up to specified","# of layers at a time"],
    ad_pspd_s:      "polish speed",
    ad_pspd_l:      ["polishing speed","in millimeters / second"],
    ad_purg_s:      "purge tower",
    ad_purg_l:      ["purge tower area in mm^2","for multi extruder setups","0 = disabled"],

    // CAM EXPERT
    cx_fast_s:      "skip shadow",
    cx_fast_l:      ["disable overhang detection","can be faster and use less","memory with complex models","but fails with overhangs","try enabling if slicing","hangs during shadowing"],
    cx_true_s:      "true shadow",
    cx_true_l:      ["computationally correct shadow","will be slower but produce","better cuts for complex parts"],

    // FDM GCODE
    ag_menu:        "gcode",
    ag_nozl_s:      "nozzle",
    ag_nozl_l:      "select output nozzle or head",
    ag_peel_s:      "peel guard",
    ag_peel_l:      ["starting at this belt z position","periodically roll the print off and","back on to the belt to unstick it","and prevent rolling deflection"],
    // ag_paws_s:      "pause layers",
    // ag_paws_l:      ["comma-separated list of layers","to inject pause commands before"],
    // ag_loop_s:      "loop layers",
    // ag_loop_l:      ["layer ranges to repeat in the format","first-last-count,first-last-count,...","omitted count = 1"],
    ag_loop_s:      "loop count",
    ag_loop_l:      ["number of times to repeat","the selected range or the","entire print if no range"],

    // SLA MENU
    sa_menu:        "slicing",
    sa_lahe_s:      "layer height",
    sa_lahe_l:      ["layer height","in millimeters"],
    sa_shel_s:      "hollow shell",
    sa_shel_l:      ["shell thickness in mm","use multiple of layer height","use 0 for solid (disabled)"],
    sa_otop_s:      "open top",
    sa_otop_l:      ["if shell is enabled","results in an open top"],
    sa_obas_s:      "open base",
    sa_obas_l:      ["if shell is enabled","results in an open base","disabled with supports"],

    sa_layr_m:      "layers",
    sa_lton_s:      "light on time",
    sa_lton_l:      ["layer light on","time in seconds"],
    sa_ltof_s:      "light off time",
    sa_ltof_l:      ["layer light off","time in seconds"],
    sa_pldi_s:      "peel distance",
    sa_pldi_l:      ["peel distance","in millimeters"],
    sa_pllr_s:      "peel lift rate",
    sa_pllr_l:      ["peel lift speed","in mm/sec"],
    sa_pldr_s:      "peel drop rate",
    sa_pldr_l:      ["peel drop speed","in mm/sec"],

    sa_base_m:      "base",
    sa_balc_s:      "layer count",
    sa_balc_l:      ["number of","base layers"],
    sa_bltn_l:      ["base layer light on","time in seconds"],
    sa_bltf_l:      ["base layer light off","time in seconds"],

    sa_infl_m:      "infill",
    sa_ifdn_s:      "density",
    sa_ifdn_l:      ["percent infill","requires shell","0 = disabled","valid 0.0 - 1.0"],
    sa_iflw_s:      "line width",
    sa_iflw_l:      ["hatch line width","in millimeters"],

    sa_supp_m:      "support",
    sa_slyr_s:      "base layers",
    sa_slyr_l:      ["base support layers","value range 0-10"],
    sa_slgp_s:      "gap layers",
    sa_slgp_l:      ["number of layers between","raft and bottom of object"],
    sa_sldn_s:      "density",
    sa_sldn_l:      ["used to compute the","number of support pillars","0.0-1.0 (0 = disable)"],
    sa_slsz_s:      "size",
    sa_slsz_l:      ["max size of a","support pillar","in millimeters"],
    sa_slpt_s:      "points",
    sa_slpt_l:      ["number of points in","each support pillar","in millimeters"],
    sl_slen_l:      "enable supports",

    sa_outp_m:      "output",
    sa_opzo_s:      "z offset",
    sa_opzo_l:      ["z layer offset","almost always 0.0","0.0-1.0 in millimeters"],
    sa_opaa_s:      "anti alias",
    sa_opaa_l:      ["enable anti-aliasing","produces larger files","can blur details"]
};
