/**
 * @swagger
 * resourcePath: /v1
 * description: All about API
 */

 /**
 * @swagger
 * path: /v1/term
 * operations:
 *   -  httpMethod: GET
 *      summary: fetch all master_term data
 *      notes: Returns a terms in novel and paragraph
 *      responseClass: term
 *      nickname: term
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: novel_id
 *          description: novel's id
 *          paramType: query
 *          required: false
 *          type: Int
 *        - name: paragraph_id
 *          description: paragraph's id
 *          paramType: query
 *          required: false
 *          type: Int
 */

  /**
 * @swagger
 * path: /v1/relation/term
 * operations:
 *   -  httpMethod: GET
 *      summary: get relation term and music
 *      notes: get relation term and music
 *      responseClass: relation_term_music
 *      nickname: relation_term_music
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: novel_id
 *          description: novel's id
 *          paramType: query
 *          required: false
 *          type: Int
 */

 /**
 * @swagger
 * path: /v1/relation/term
 * operations:
 *   -  httpMethod: POST
 *      summary: save relation term and music
 *      notes: save relation term and music
 *      responseClass: relation_term_music
 *      nickname: relation_term_music
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          description: post request body
 *          paramType: body
 *          required: true
 *          type: relation_term_music
 *          dataType: object
 *      responses:
 *          200:
 *              description: Success
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: "#/definitions/Path" 
 *          400:
 *              description: Error
 *              schema: 
 *                  type: object
 */

 /**
 * @swagger
 * path: /v1/relation/novel
 * operations:
 *   -  httpMethod: GET
 *      summary: need novel_id, paragraph_id and user_id or just novel_id
 *      notes: Returns a terms in novel and paragraph
 *      responseClass: term
 *      nickname: term
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: novel_id
 *          description: novel's id
 *          paramType: query
 *          required: false
 *          type: Int
 *        - name: paragraph_id
 *          description: paragraph's id
 *          paramType: query
 *          required: false
 *          type: Int
 *        - name: user_id
 *          description: user's id
 *          paramType: query
 *          required: false
 *          type: Int
 */

 /**
 * @swagger
 * path: /v1/relation/novel
 * operations:
 *   -  httpMethod: POST
 *      summary: save relation novel and music
 *      notes: save relation novel and music
 *      responseClass: relation_novel_music
 *      nickname: relation_novel_music
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          description: post request body
 *          paramType: body
 *          required: true
 *          type: relation_novel_music
 *          dataType: object
 *      responses:
 *          200:
 *              description: Success
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: "#/definitions/Path" 
 *          400:
 *              description: Error
 *              schema: 
 *                  type: object
 */

/**
 * @swagger
 * path: /v1/novel
 * operations:
 *   -  httpMethod: GET
 *      summary: fetch all master_novel data
 *      notes: Returns a novel based on novels
 *      responseClass: novel
 *      nickname: novel
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: id
 *          description: novel's id
 *          paramType: query
 *          required: false
 *          type: Int
 */

/**
 * @swagger
 * path: /v1/music
 * operations:
 *   -  httpMethod: GET
 *      summary: fetch all master_music data
 *      notes: Returns a user based on username
 *      responseClass: music
 *      nickname: music
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: id
 *          description: music's id
 *          paramType: query
 *          required: false
 *          type: Int
 *        - name: scale
 *          description: scale's id
 *          paramType: query
 *          required: false
 *          type: Int
 *        - name: rhythm
 *          description: rhythm's id
 *          paramType: query
 *          required: false
 *          type: Int
 *        - name: time
 *          description: time's id
 *          paramType: query
 *          required: false
 *          type: Int
 */

 /**
 * @swagger
 * path: /v1/rhythm
 * operations:
 *   -  httpMethod: GET
 *      summary: fetch all rhythm data
 *      notes: Returns a user based on username
 *      responseClass: rhythm
 *      nickname: rhythm
 *      consumes:
 *        - application/json
 */

 /**
 * @swagger
 * path: /v1/time
 * operations:
 *   -  httpMethod: GET
 *      summary: fetch all time data
 *      notes: Returns a user based on username
 *      responseClass: time
 *      nickname: time
 *      consumes:
 *        - application/json
 */

/**
 * @swagger
 * path: /v1/scale
 * operations:
 *   -  httpMethod: GET
 *      summary: fetch all scale data
 *      notes: Returns a user based on username
 *      responseClass: scale
 *      nickname: scale
 *      consumes:
 *        - application/json
 */

/**
 * @swagger
 * path: /v1/login
 * operations:
 *   -  httpMethod: GET
 *      summary: Login with username and password
 *      notes: Returns a user based on username
 *      responseClass: login
 *      nickname: login
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: name
 *          description: Your username
 *          paramType: query
 *          required: true
 *          type: String
 *        - name: password
 *          description: Your username
 *          paramType: query
 *          required: true
 *          type: Int
 *      responses:
 *          200:
 *              description: Success
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: "#/definitions/Path" 
 *          400:
 *              description: Error
 *              schema: 
 *                  type: object
 */

/**
 * @swagger
 * path: /v1/user
 * operations:
 *   -  httpMethod: GET
 *      summary: get user's data without password
 *      notes: Returns a user's id
 *      responseClass: user
 *      nickname: user
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: name
 *          description: Your username
 *          paramType: query
 *          required: false
 *          type: String
 */

/**
 * @swagger
 * path: /v1/user
 * operations:
 *   -  httpMethod: POST
 *      summary: Login with username and password
 *      notes: Returns a user based on username
 *      responseClass: user
 *      nickname: user
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          description: Your username
 *          paramType: body
 *          required: true
 *          type: user
 *          dataType: object
 *      responses:
 *          200:
 *              description: Success
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: "#/definitions/Path" 
 *          400:
 *              description: Error
 *              schema: 
 *                  type: object
 */

/**
 * @swagger
 * models:
 *   user:
 *     id: user
 *     properties:
 *       name:
 *         type: String
 *       age:
 *         type: Int
 *       sex:
 *         type: String
 *       password:
 *         type: Int
 *       questionnaire_1:
 *         type: Int
 *       questionnaire_2:
 *         type: Int
 *       questionnaire_3:
 *         type: Int
 *       questionnaire_4:
 *         type: Int
 *   relation_novel_music:
 *     id: relation_novel_music
 *     properties:
 *       paragraph_id:
 *         type: Int
 *       user_id:
 *         type: Int
 *       music_id:
 *         type: Int
 *       novel_id:
 *         type: Int
 *   relation_term_music:
 *     id: relation_term_music
 *     properties:
 *       term_id:
 *         type: Int
 *       user_id:
 *         type: Int
 *       music_id:
 *         type: Int
 */